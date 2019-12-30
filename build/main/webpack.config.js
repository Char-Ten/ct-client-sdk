const webpack = require("webpack")
const paths = require('../paths')
const loaders = require("../loaders")
const common = require("../common")

module.exports=(env)=>{
    console.log(env)
    return {
        mode:env.prod?'production':'development',
        target:'electron-main',
        entry:paths.MAIN_JS,
        output:{
            path:paths.DIST_DIR,
            filename:"main.js"
        },
        resolve:{
            extensions: ['.d.ts', '.ts', '.js', '.json'],
            alias:{
                src:paths.SRC_DIR
            }
        },
        module:{
            rules:[
                loaders.tsLoader
            ]
        },
        plugins:[
            new webpack.DefinePlugin({
                UI_LINK:env.prod?'./ui/index.html':`http://localhost:${common.UI_PORT}`
            })
        ]
    }
}