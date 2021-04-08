const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const appFolder = path.dirname(process.execPath);
const appFolder2 = path.dirname("main.js");
const updateExe = path.resolve(appFolder, "..", "Update.exe");
const exeName = path.basename(process.execPath);
const appLink = path.resolve(appFolder, "..", "block.exe");

console.log(path.resolve(`${path.dirname(process.mainModule.filename)}/package`, "block.exe"));
console.log("-------");
console.log(updateExe);
console.log("-------");
console.log(exeName);

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

app.setLoginItemSettings({
    openAtLogin: true,
    ath: app.getPath("exe"),
});
console.log(app.getLoginItemSettings());

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
