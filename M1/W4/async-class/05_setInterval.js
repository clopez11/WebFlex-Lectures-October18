let iteration = 0;

const interval = setInterval(() => {
  iteration++;
  console.log(`Current Iteration: ${iteration}`);

  if (iteration === 10) {
    clearInterval(interval);
  }
}, 500);
// console.log(interval);
