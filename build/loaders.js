const jsRegExp = /\.jsx?$/;
const tsRegExp = /\.tsx?$/;
const lessRegExp = /\.less$/;
const cssRegExp = /\.css$/;
const moduleLessRegExp = /\.module\.less$/;
const moduleCssRegExp = /\.module\.css$/;

const moduleCssLoader = {
	loader: "css-loader",
	options: {
		modules: true
	}
};


const getBabelLoader=()=>({
	loader: "babel-loader",
	options: {
        presets: ["@babel/preset-react","@babel/preset-env","@babel/preset-typescript"],
        plugins:[]
	}
})

const babelLoader = getBabelLoader();
const jsLoader = {
	test: jsRegExp,
	use: [babelLoader]
};
const tsLoader = {
	test: tsRegExp,
	use: [babelLoader]
};
const lessLoader = {
	test: lessRegExp,
	exclude: moduleLessRegExp,
	use: ["style-loader", "css-loader", "less-loader"]
};
const cssLoader = {
	test: cssRegExp,
	exclude: moduleCssRegExp,
	use: ["style-loader", "css-loader"]
};

const lessModuleLoader = {
	test: moduleLessRegExp,
	use: ["style-loader", moduleCssLoader, "less-loader"]
};
const cssModuleLoader = {
	test: moduleCssRegExp,
	use: ["style-loader", moduleCssLoader]
};

const addBabelOptionToLoader = (loader,options)=>{
	let babelLoader = getBabelLoader();
	babelLoader.options.plugins.push(...(options.plugins||[]));
	babelLoader.options.presets.push(...(options.presets||[]));
    loader.use[0]=babelLoader
    return loader
}

module.exports = {
	jsLoader,
	tsLoader,
	lessLoader,
	cssLoader,
	lessModuleLoader,
    cssModuleLoader,
    addBabelOptionToLoader
};
