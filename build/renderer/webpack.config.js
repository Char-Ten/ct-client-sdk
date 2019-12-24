const paths = require("../paths")
const loaders = require("../loaders")
module.exports = (env)=>{
    return {
        mode:env.prod?'production':'development',
        entry:paths.UI_JS,
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
        }
    }
}