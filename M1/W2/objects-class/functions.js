// pass by value: https://pythontutor.com/javascript.html#mode=edit
let x = 10;
let y = x;

x = 20;
console.log(y);

let number = 10;
function increase(number) {
  number++;
}
increase(number);

console.log(number);
console.log(x);

// pass by reference: https://pythontutor.com/javascript.html#mode=edit
let x = { value: 10 };
let y = x;

x.value = 20;
console.log(y);

let obj = { value: 10 };
function increase(ref) {
  ref.value++;
}
increase(obj);
console.log(obj);
