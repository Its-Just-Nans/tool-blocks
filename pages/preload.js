const fs = require("fs");
const path = require("path");
const { contextBridge } = require("electron");

(async () => {
    let allMenu = [];

    const blocksPath = path.join(__dirname, "./blocks");

    let files = fs.readdirSync(blocksPath);
    if (typeof files === "undefined" || files === null) {
        console.error("Unable to scan directory: " + err);
        files = [];
    }
    for (let oneFile of files) {
        let newMenu = {};
        const dirPath = path.join(blocksPath, oneFile);
        if (fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
            newMenu.name = oneFile; // search in package json
            // looking for preload
            const preloadPath = path.join(dirPath, "preload.js");
            if (fs.existsSync(preloadPath)) {
                newMenu.preload = preloadPath;
            }
            const src = path.join(dirPath, "index.html");
            if (fs.existsSync(src)) {
                newMenu.src = src;
            }
        }
        allMenu.push(newMenu);
    }

    contextBridge.exposeInMainWorld("api", {
        getMenus: () => {
            return allMenu;
        },
        getBlock: (preloadPath) => {
            if (preloadPath != "") {
                if (!path.isAbsolute(preloadPath)) {
                    preloadPath = path.resolve(__dirname, preloadPath);
                }
                const preloadBlock = require(preloadPath);
                return preloadBlock || {};
            } else {
                return {};
            }
        },
    });
})();
