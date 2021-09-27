const messageFormSpace = require("../src/file");

const result = ["AIR ROZO", "LAND FAIJWJSOOFAMAU", "ICE STHSTSTVSASOS"];

it("Check file is reading and spliting Data work properly", () => {
  expect(messageFormSpace("../assets/one.txt")).toStrictEqual(result);
});
