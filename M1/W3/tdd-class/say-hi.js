const sayHi = (name) => {
  if (!name || typeof name !== "string") {
    return "";
  }

  return `Hi ${name}`;
};

const sayHola = (name) => {
  return `Hola ${name}`;
};

const ID = 1234;

// const actual = sayHi("Charlotte");
// const expected = "Hi Charlotte";
// assert.equal(actual, expected);

// Option 1: exporting one thing.
// module.exports = sayHi;

// Option 2: exporting (key/value)
// module.exports.sayHi = sayHi;
// module.exports.sayHi = sayHola;
// module.exports.ID = ID;

// Option 3: commonly used, exporting more than one.
module.exports = {
  sayHi,
  sayHola,
  ID,
};
// module.exports = { sayHi, sayHola, ID };
