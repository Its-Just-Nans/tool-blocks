const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win2;
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

const exec = require("child_process").exec;

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => {
        debugger;
        callback(stdout);
    });
}

// call the function

ipcMain.on("toMain", (event, args) => {
    execute(args, (output) => {
        console.log(output.toString("utf8"));
        return "lol";
    });
});
