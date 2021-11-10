const displayLater = (callback) => {
  console.log("(01) BEFORE CALL: 🐸🐸🐸");

  setTimeout(() => {
    callback();
  }, 3000);

  console.log("(02) AFTER CALL: 🐹🐹🐹");
};

displayLater(() => console.log("INSIDE CALL: 🐨🐨🐨"));

// What is the order of events?
// (01) BEFORE CALL: 🐸🐸🐸
// (02) AFTER CALL: 🐹🐹🐹
// INSIDE CALL: 🐨🐨🐨
