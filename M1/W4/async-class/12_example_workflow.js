const addition = (num1, num2) => {
  return num1 + num2;
};

const sayHi = (name) => {
  return `Hi ${name}`;
};

addition(3, 8);

setTimeout(() => {
  console.log("I'm Asynchronous");
});

sayHi("Maui");

getData((data) => {
  console.log(data);
});
