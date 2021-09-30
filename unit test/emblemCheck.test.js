const isEmblemPresent = require("../src/emblemCheck");
const decryptor = require("../src/decryption");

const cipherKeys = [
  [5, "PANDAUFSI", "PANDA", false],
  [7, "MAMMOTHTHVAO", "MAMMOTH", false],
  [6, "DRAGONJXGMUT", "DRAGON", true],
  [3, "ZORRO", "OWL", true],
  [7, "OCTOVJAVWBZPUS", "OCTOPUS", true],
  [3, "ROZO", "OWL", true],
  [5, "FAIJWJSOOFAMAU", "PANDA", true],
  [7, "STHSTSTVSASOS", "MAMMOTH", true],
  [3, "OWL", "OWL", false],
  [5, "FAIJWJSOOFAMAU", "PANDA", true],
  [7, "STHSTSTVSASOS", "MAMMOTH", true],
  [6, "JXGOOMUTOO", "DRAGON", true],
  [3, "OWLAOWLBOWLC", "OWL", false],
  [5, "OFBBMUFDICCSO", "PANDA", true],
  [7, "VTBTBHTBBBOBAB", "MAMMOTH", true],
  [7, "SUMMERISCOMING", "OCTOPUS", false],
];

const messages = [];
for (let cipherKey of cipherKeys)
  messages.push(decryptor(cipherKey[0], cipherKey[1].split("")));

it("CheckRule Funtion with Expected correct Output  - ", () => {
  for (let i = 0; i < messages.length - 1; i++) {
    expect(isEmblemPresent(messages[i], cipherKeys[i][2])).toBe(
      cipherKeys[i][3]
    );
  }
});
