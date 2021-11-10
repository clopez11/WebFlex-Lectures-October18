console.log("(1) Before setTimeouts");

setTimeout(() => {
  console.log("(2) Hello");
});

setTimeout(() => {
  console.log("(3) Second Hello");
});

console.log("(4) After setTimeouts");

const stop = 100;
for (let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date);
}
