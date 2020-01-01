const childProcess = require("child_process")

function kill(pid) {
	childProcess.execSync(
		process.platform === "win32" ? `taskkill /pid ${pid} -t -f` : `kill ${pid}`
	);
}

module.exports={
    kill
}