const displayLater = (callback) => {
  let pet = "🐱";
  console.log("(01) BEFORE CALL: ", pet);

  setTimeout(() => {
    pet = "🐶";
    callback(pet);
  }, 3000);

  console.log("(02) AFTER CALL", pet);

  return pet;
};

const result = displayLater((pet) => console.log("INSIDE CALL: ", pet));
console.log(result);

// What is the order of events?
// (01) BEFORE CALL:  🐱
// (02) AFTER CALL 🐱
// 🐱
// INSIDE CALL:  🐶
