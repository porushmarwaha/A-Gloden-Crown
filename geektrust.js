const checkRuler = require("./src/supportChecker");
const messageFormSpace = require("./src/file");
const path = require("path");

const filename = process.argv[2];

filename
  ? console.log(checkRuler(messageFormSpace(path.join(__dirname, filename))))
  : console.log("NONE");
