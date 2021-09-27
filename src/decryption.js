const NUMBER_OF_ALPHABET = 26;
const ASCII_A_LOCATION = 65;

const decryptor = (key, cipher) => {
  const message = [];

  for (let character in cipher) {
    if (cipher[character].charCodeAt(0) - key < ASCII_A_LOCATION)
      message.push(
        String.fromCharCode(
          cipher[character].charCodeAt(0) - key + NUMBER_OF_ALPHABET
        )
      );
    else
      message.push(String.fromCharCode(cipher[character].charCodeAt(0) - key));
  }

  return message;
};

module.exports = decryptor;
