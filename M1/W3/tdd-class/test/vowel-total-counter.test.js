const { assert } = require("chai");
const vowelTotalCounter = require("../vowel-total-counter");

describe("tests for vowelCounter", () => {
  it('returns 3 when given the string "orange"', () => {
    const actual = vowelTotalCounter("orange");
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('returns 5 when given the string "lighthouse labs"', () => {
    const actual = vowelTotalCounter("lighthouse labs");
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('returns 5 when given the string "aeiou"', () => {
    const actual = vowelTotalCounter("aeiou");
    const expected = 5;

    assert.equal(actual, expected);
  });

  // Sad Path: Edge Case
  it("returns null if not string is passed", () => {
    const actual = vowelTotalCounter();
    const expected = null;

    assert.equal(actual, expected);
  });
});
