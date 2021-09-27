const checkRuler = require("../src/supportChecker");
const messageFormSpace = require("../src/file");

it("CheckRule Funtion with Expected correct Output  - ", () => {
  expect(checkRuler(messageFormSpace("../assets/one.txt"))).toBe(
    "SPACE AIR LAND ICE"
  );
});

it("Check Rule with Empty value - ", () => {
  expect(checkRuler([])).toBe("NONE");
});

it("Check Rule Function expected with NONE Output", () => {
  expect(checkRuler(messageFormSpace("../assets/two.txt"))).toBe("NONE");
});
