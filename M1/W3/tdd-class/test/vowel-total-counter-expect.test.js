const { expect } = require("chai");
const vowelTotalCounter = require("../vowel-total-counter");

describe("tests for vowelCounter using expect from chai", () => {
  it('returns 3 when given the string "orange"', () => {
    const result = vowelTotalCounter("orange");

    expect(result).to.equal(3);
  });

  it('returns 5 when given the string "lighthouse labs"', () => {
    const result = vowelTotalCounter("lighthouse labs");

    expect(result).to.equal(5);
  });

  it('returns 5 when given the string "aeiou"', () => {
    const result = vowelTotalCounter("aeiou");
    const expected = 5;

    expect(result).to.equal(5);
  });

  // Sad Path: Edge Case
  it("returns null if not string is passed", () => {
    const result = vowelTotalCounter();

    expect(result).to.equal(null);
  });
});
