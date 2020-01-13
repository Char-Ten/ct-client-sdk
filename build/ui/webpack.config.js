const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("../paths");
const loaders = require("../loaders");

module.exports = env => {
	const babelOption = {
		plugins: [
			[
				"babel-plugin-import",
				{
					libraryName: "antd",
					libraryDirectory: "es",
					style: "less"
				}
			],
			[
				"babel-plugin-label-switch",
				{
					map: {
						dev: !env.prod,
						prod: env.prod
					}
				}
			]
		]
    };
	return {
		mode: env.prod ? "production" : "development",
		target: "electron-renderer",
		entry: paths.UI_JS,
		output: {
			path: paths.DIST_UI_DIR,
			filename: "main.js",
			publicPath: "./"
		},
		resolve: {
			extensions: [".d.ts", ".ts", ".js", ".json"],
			alias: {
				src: paths.SRC_DIR
			}
		},
		module: {
			rules: [
				loaders.addBabelOptionToLoader(loaders.jsLoader, babelOption),
				loaders.addBabelOptionToLoader(loaders.tsLoader, babelOption),
				loaders.cssLoader,
				loaders.cssModuleLoader,
				loaders.lessLoader,
				loaders.lessModuleLoader
			]
		},
		stats: "minimal",
		plugins: [
			new HtmlWebpackPlugin({
				filename: "index.html",
				template: paths.UI_HTML
			})
		]
	};
};
