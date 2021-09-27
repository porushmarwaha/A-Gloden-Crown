const fs = require("fs");
const path = require("path");

const UTF_8 = "utf-8";

const messageFormSpace = (filePath) => {
  return fs
    .readFileSync(path.resolve(__dirname, filePath), UTF_8)
    .split("\r\n");
};

module.exports = messageFormSpace;
