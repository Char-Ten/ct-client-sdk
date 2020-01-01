import {app,BrowserWindow} from "electron";
declare const UI_LINK:string;
app.on("ready",()=>{
    let win = new BrowserWindow();
    $dev:{
        win.loadURL(UI_LINK);
        
    }
    $prod:{
        win.loadFile(UI_LINK);
    }
    
});

app.on("window-all-closed",()=>{
    app.quit();
})
