const displayLater = (callback) => {
  let pet = "🐱";
  console.log("(01) BEFORE CALL: ", pet);

  setTimeout(() => {
    pet = "🐶";
    callback(pet);
  }, 3000);

  console.log("(02) AFTER CALL", pet);
};

displayLater((pet) => console.log("INSIDE CALL: ", pet));

// What is the order of events? pet?
// (01) BEFORE CALL:  🐱
// (02) AFTER CALL 🐱
// INSIDE CALL:  🐶
