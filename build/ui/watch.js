const DevServer = require("webpack-dev-server");
const webpack = require("webpack");
const uiConfig = require("./webpack.config");
const paths = require('../paths')
const common = require('../common')
const compiler = webpack(uiConfig({ dev: 1 }))
new DevServer(compiler,{
    contentBase:paths.DIST_UI_DIR,
    hot:true
}).listen(common.UI_PORT,(e)=>{
    if(e){
        console.error('开发服务器启动失败');
        console.error(e);
        return
    }
})