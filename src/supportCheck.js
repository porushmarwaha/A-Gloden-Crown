const decryptor = require("./decryption");
const isEmblemPresent = require("./emblemCheck");

const MIN_SUPPORT_FOR_KING = 4;
const NOT_KING = "NONE";

const kindomEmblem = {
  LAND: "PANDA",
  WATER: "OCTOPUS",
  ICE: "MAMMOTH",
  AIR: "OWL",
  FIRE: "DRAGON",
};

const isSupporting = (key, cipher) => {
  const text = decryptor(kindomEmblem[key].length, cipher.split(""));

  if (isEmblemPresent(text, kindomEmblem[key])) return true;

  return false;
};

const checkRuler = (encryptedLetter) => {
  if (encryptedLetter.length < 3) return NOT_KING;

  const support = new Set();
  support.add("SPACE");

  const result = [];

  encryptedLetter.map((e) => {
    const message = e.split(" ");
    const key = message.shift();

    if (isSupporting(key, message.join(""))) support.add(key);
  });

  support.forEach((e) => result.push(e));

  return result.length >= MIN_SUPPORT_FOR_KING ? result.join(" ") : NOT_KING;
};

module.exports = checkRuler;
