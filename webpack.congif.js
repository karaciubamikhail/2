const path = require("path")

module.exports = {
    entry: ".src/index.js",
    outpyt: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};