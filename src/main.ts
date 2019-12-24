import {app,BrowserWindow} from "electron";

app.on("ready",()=>{
    let win = new BrowserWindow({
    });
    win.loadFile("./pages/test/index.html");
});

app.on("window-all-closed",()=>{
    app.quit();
})