const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const appFolder = path.dirname(process.execPath);

let win;
const linkToStartFiles = "./pages/navigation/";

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, `${linkToStartFiles}preload.js`),
        },
    });
    win.loadFile(`${linkToStartFiles}index.html`);
}

app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath("exe"),
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
