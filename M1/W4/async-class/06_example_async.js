const displayLater = (callback) => {
  console.log("(01) BEFORE CALL: πΈπΈπΈ");

  setTimeout(() => {
    callback();
  }, 3000);

  console.log("(02) AFTER CALL: πΉπΉπΉ");
};

displayLater(() => console.log("INSIDE CALL: π¨π¨π¨"));

// What is the order of events?
// (01) BEFORE CALL: πΈπΈπΈ
// (02) AFTER CALL: πΉπΉπΉ
// INSIDE CALL: π¨π¨π¨
