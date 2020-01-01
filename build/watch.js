const cp = require("child_process");
const path = require('path');
const utls = require('./utils')
// const main = cp.fork(path.join(__dirname,'./main/watch.js'),{
//     detached:true
// });
const ui = cp.fork(path.join(__dirname,'./ui/watch.js'),{
    detached:true
});

ui.on("message",function(e){
    console.log(e)
})


// main.on("exit",()=>{
//     utls.kill(ui.pid)
//     process.exit();
// });

ui.on("exit",()=>{
    // utls.kill(main.pid)
    process.exit();
})

process.on("beforeExit",()=>{
    
    utls.kill(ui.pid);
    // utls.kill(main.pid);
})