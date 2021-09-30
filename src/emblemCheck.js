const mapWords = (emblem) => {
  const wordConter = {};

  emblem.map((element) => {
    if (wordConter[element]) wordConter[element]++;
    else wordConter[element] = 1;
  });

  return wordConter;
};

const isEmblemPresent = (message, emblem) => {
  const emblemCounter = mapWords(emblem.split(""));
  const messageCounter = mapWords(message);

  for (let character of emblem) {
    if (
      (messageCounter[character] === undefined
        ? 0
        : messageCounter[character]) < emblemCounter[character]
    )
      return false;
  }
  return true;
};

module.exports = isEmblemPresent;
