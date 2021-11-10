const map = (list, callback) => {
  const output = [];

  for (const element of list) {
    output.push(callback(element));
  }

  return output;
};

const result = map([1, 2, 3], (num) => num * num);
console.log(result);
