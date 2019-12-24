const jsRegExp = /\.jsx?$/;
const tsRegExp = /\.tsx?$/;
const lessRegExp = /\.less$/;
const cssRegExp = /\.css$/;
const moduleLessRegExp = /\.module\.less$/;
const moduleCssRegExp = /\.module\.css$/;

const moduleCssLoader={
    loader: "css-loader",
	options: {
		modules: true
	}
}
const jsLoader = {
    test:jsRegExp,
    use:['babel-loader']
}
const tsLoader = {
    test:tsRegExp,
    use:['babel-loader']
}
const lessLoader = {
    test:lessRegExp,
    exclude:moduleLessRegExp,
    use:[
        'style-loader',
        'css-loader',
        'less-loader'
    ]
}
const cssLoader = {
    test:cssRegExp,
    exclude:moduleCssRegExp,
    use:[
        'style-loader',
        'css-loader',
    ]
}

const lessModuleLoader={
    test:moduleLessRegExp,
    use:[
        'style-loader',
        moduleCssLoader,
        'less-loader'
    ]
}
const  cssModuleLoader={
    test:moduleCssRegExp,
    use:[
        'style-loader',
        moduleCssLoader,
    ]
}


module.exports={
    jsLoader,
    tsLoader,
    lessLoader,
    cssLoader,
    lessModuleLoader,
    cssModuleLoader
}


