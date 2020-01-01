const webpack = require("webpack");
const childProcess = require("child_process");
const config = require("./webpack.config");
const paths = require("../paths");
const utils = require("../utils")

const compiler = webpack(config({ dev: 1 }));

let electronProcess = null;
compiler.watch({}, (err, s) => {
	console.clear();
	if (err) {
		console.log(err);
		return;
	}
	if (electronProcess && electronProcess.pid) {
		electronProcess.removeAllListeners();
		utils.kill(electronProcess.pid);
	}
	electronProcess = childProcess.spawn(
		process.platform === "win32" ? "npm.cmd" : "npm",
		["run", "electron"],
		{
			cwd: paths.PROJ_DIR
		}
	);
	electronProcess.on("error", e => {
		console.log(e);
	});
	electronProcess.on("exit", () => {
		console.log("electron进程被用户手动关闭");
		process.exit();
	});
});
