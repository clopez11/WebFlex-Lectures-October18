const assert = require("assert").strict;
const { sayHi } = require("./say-hi");

try {
  assert.equal(sayHi("Joe"), "Hi Charlotte");
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Expected: ${error.expected} - Actual: ${error.actual}`);
}

try {
  assert.equal(sayHi("Jane"), "Hi Charlotte");
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Expected: ${error.expected} - Actual: ${error.actual}`);
}

try {
  assert.equal(sayHi("Charlotte"), "Hi Charlotte");
} catch (error) {
  console.log(`${error.name} - ${error.message}`);
  console.log(`Expected: ${error.expected} - Actual: ${error.actual}`);
}
