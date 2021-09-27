const decryptor = require("../src/decryption");

it("Check Decryption is working fine - ", () => {
  expect(decryptor(3, "ROZO")).toStrictEqual(["O", "L", "W", "L"]);
});

it("Check Decryption is working fine - ", () => {
  expect(decryptor(3, "ABCD")).toStrictEqual(["X", "Y", "Z", "A"]);
});
