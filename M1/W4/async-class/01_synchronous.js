function actionOne() {
  console.log("(1) Action One!");
}

function printData() {
  const stop = 100;
  for (let i = 0; i < stop; i++) {
    const date = new Date();
    console.log(date);
  }
}

function actionTwo() {
  console.log("(2) Action Two!");
}

function actionThree() {
  console.log("(3) Action Three!");
}

actionOne();
printData();
actionTwo();
actionThree();
