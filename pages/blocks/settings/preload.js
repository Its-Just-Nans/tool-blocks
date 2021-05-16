const os = require("os");

const start = function () {
    console.log("start");
};

const osTEST = function () {
    return os.homedir();
};

module.exports = {
    start,
    osTEST,
};
