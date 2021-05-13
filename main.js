const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const appFolder = path.dirname(process.execPath);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    win.loadFile("./pages/index.html");
}

app.setLoginItemSettings({
    openAtLogin: true,
    ath: app.getPath("exe"),
});

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
