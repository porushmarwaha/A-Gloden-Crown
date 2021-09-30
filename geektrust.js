const checkRuler = require("./src/supportCheck");
const messageFormSpace = require("./src/file");

const filename = process.argv[2];

filename
  ? console.log(checkRuler(messageFormSpace(filename)))
  : console.log("NONE");
