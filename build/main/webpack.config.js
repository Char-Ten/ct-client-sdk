const webpack = require("webpack")
const paths = require('../paths')
const loaders = require("../loaders")
const common = require("../common")

module.exports=(env)=>{
    const babelOption={
        plugins:[
            ["babel-plugin-label-switch",{
                map:{
                    dev:!env.prod,
                    prod:env.prod
                }
            }]
        ]
    }
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
                loaders.addBabelOptionToLoader(
                    loaders.jsLoader,
                    babelOption
                ),
                loaders.addBabelOptionToLoader(
                    loaders.tsLoader,
                    babelOption
                )
            ]
        },
        devtool:env.prod?'source-map':'cheap-eval-source-map',
        plugins:[
            new webpack.DefinePlugin({
                UI_LINK:JSON.stringify(env.prod?'./ui/index.html':`http://localhost:${common.UI_PORT}`)
            })
        ]
    }
}