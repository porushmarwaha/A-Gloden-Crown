const decryptor = require("./decryption");

const MIN_SUPPORT_FOR_KING = 4;
const NOT_KING = "NONE";

const kindomEmblem = {
  SPACE: "GORILLA",
  LAND: "PANDA",
  WATER: "OCTOPUS",
  ICE: "MAMMOTH",
  AIR: "OWL",
  FIRE: "DRAGON",
};

const isEmblemPresent = (message, emblem) => {
  for (let character of emblem)
    if (message.indexOf(character) == -1) return false;

  return true;
};

const isSupporting = (key, cipher) => {
  if (
    isEmblemPresent(
      decryptor(kindomEmblem[key].length, cipher.split("")),
      kindomEmblem[key]
    )
  )
    return true;

  return false;
};

const checkRuler = (encryptedLetter) => {
  let support = ["SPACE"];

  if (encryptedLetter.length < 3) return NOT_KING;

  encryptedLetter.forEach((e) => {
    const message = e.split(" ");
    if (isSupporting(message[0], message[1])) support.push(message[0]);
  });

  return support.length >= MIN_SUPPORT_FOR_KING ? support.join(" ") : NOT_KING;
};

module.exports = checkRuler;
