const path = require("path");
const PROJ_DIR = path.join(__dirname,'../')
const SRC_DIR = path.join(__dirname,'../src')
const DIST_DIR = path.join(__dirname,'../dist')
const DIST_UI_DIR = path.join(DIST_DIR,'ui')
const BUILD_DIR = __dirname
const MAIN_JS = path.join(SRC_DIR,'main.ts')
const UI_JS = path.join(SRC_DIR,'ui/main.tsx')
const UI_HTML = path.join(SRC_DIR,'ui/index.html')

module.exports={
    PROJ_DIR,
    SRC_DIR,
    BUILD_DIR,
    DIST_DIR,
    DIST_UI_DIR,
    MAIN_JS,
    UI_JS,
    UI_HTML,
    
}
