const tsRegExp = /\.ts$/;
const lessRegExp = /\.less$/;
const cssRegExp = /\.css$/;
const moduleLessRegExp = /\.module\.less$/;
const moduleCssRegExp = /\.module\.css$/;

const tsLoader = {
    test:tsRegExp,
    use:[{
        loader:'babel-loader'
    }]
}
const lessLoader = {
    test:lessRegExp,
    use:[
        'style-loader',
        'css-loader',
        'less-loader'
    ]
}
const cssLoader = {
    test:cssRegExp,
    use:[
        'style-loader',
        'css-loader',
    ]
}

const lessModuleLoader={
    test:moduleLessRegExp,
    exclude:lessRegExp,
    
}


module.exports={
    tsLoader,
    lessLoader,
    cssLoader
}


