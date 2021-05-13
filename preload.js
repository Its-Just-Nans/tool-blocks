const fs = require("fs");
const path = require("path");
const { contextBridge } = require("electron");

(async () => {
    let allMenu = [];

    const blocksPath = path.join(__dirname, "pages/blocks");

    let files = fs.readdirSync(blocksPath);
    if (typeof files === "undefined" || files === null) {
        console.error("Unable to scan directory: " + err);
        files = [];
    }
    for (let oneFile of files) {
        let newMenu = {};
        const dirPath = path.join(blocksPath, oneFile);
        if (fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
            newMenu.name = oneFile;
            // looking for preload
            const preloadPath = path.join(dirPath, "preload.js");
            if (fs.existsSync(preloadPath)) {
                newMenu.preloadPath = preloadPath;
            }
        }
        allMenu.push(newMenu);
    }

    const loadPreload = function (preloadPath) {
        const { start } = require(path.join(__dirname, preloadPath));
        start();
    };

    contextBridge.exposeInMainWorld("api", {
        getMenus: () => {
            return allMenu;
        },
        load: (preloadPath) => {
            loadPreload(preloadPath);
        },
    });
})();
