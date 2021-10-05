const decryptor = require("./decryption");
const isEmblemPresent = require("./emblemCheck");

const MIN_SUPPORT_FOR_KING = 1;
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
  let obj = {};

  const result = [];

  encryptedLetter.map((e) => {
    const message = e.split(" ");
    const senderKingdom = message.shift();
    const reciverKingdom = message.shift();

    if (!obj[senderKingdom]) obj[senderKingdom] = [];

    if (isSupporting(reciverKingdom, message.join("")))
      obj[senderKingdom].push(reciverKingdom);
  });

  let winner = "";
  for (let i in obj) {
    if (winner === "") {
      winner = i;
    } else if (obj[i].length > obj[winner].length) winner = i;
  }

  result.push(winner);
  result.push(obj[winner].join(" "));
  return result.join(" ");
};

module.exports = checkRuler;
