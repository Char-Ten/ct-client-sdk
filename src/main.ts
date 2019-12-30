import {app,BrowserWindow} from "electron";
import './main.d';
app.on("ready",()=>{
    let win = new BrowserWindow();
    win.loadFile(UI_LINK);
});

app.on("window-all-closed",()=>{
    app.quit();
})