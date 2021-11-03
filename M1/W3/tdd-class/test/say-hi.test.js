const { assert } = require("chai");
const { sayHi } = require("../say-hi");

describe("tests for sayHi()", () => {
  it("should return a 'Charlotte' when we pass a 'Charlotte'", () => {
    const actual = sayHi("Charlotte");
    const expected = "Hi Charlotte";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an empty string", () => {
    const actual = sayHi("");
    const expected = "";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an array", () => {
    const actual = sayHi([]);
    const expected = "";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an object", () => {
    const actual = sayHi({});
    const expected = "";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an number", () => {
    const actual = sayHi(1);
    const expected = "";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an undefined", () => {
    const actual = sayHi(undefined);
    const expected = "";

    assert.equal(actual, expected);
  });

  it("should return an empty string when pass an null", () => {
    const actual = sayHi(null);
    const expected = "";

    assert.equal(actual, expected);
  });
});
