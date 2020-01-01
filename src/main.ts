import {app,BrowserWindow} from "electron";
declare const UI_LINK:string;
app.on("ready",()=>{
    let win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    case$_dev:{
        win.loadURL(UI_LINK);
        win.webContents.openDevTools()
    }
    case$_prod:{
        win.loadFile(UI_LINK);
    }
    
});

app.on("window-all-closed",()=>{
    app.quit();
})
