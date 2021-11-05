const vowelTotalCounter = (str) => {
  if (!str) {
    return null;
  }

  const vowels = ["a", "e", "i", "o", "u"];

  let total = 0;

  for (const char of str) {
    // check if char is a vowel
    if (vowels.includes(char)) {
      // if it is, increment total
      total += 1;
    }
  }

  return total;
};

module.exports = vowelTotalCounter;
