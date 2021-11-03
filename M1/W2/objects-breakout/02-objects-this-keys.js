const team = {
  city: "Toronto",
  teamName: "Raptors",
  players: ["player1", "player2", "player3"],
  years: [2019, 2020, 2021],
};

// const retrieveKey = function (obj, val) {
//   for (const key in obj) {
//     if (obj[key] === val) {
//       console.log("key", key);
//     }
//   }
// };
// retrieveKey(team, "Raptors");
// retrieveKey(team, "Toronto");

// Other methods
const keyList = Object.keys(team);
console.log(keyList);
console.log("-----");
const valueList = Object.values(team);
console.log(valueList);
console.log("-----");
const entries = Object.entries(team);
console.log(entries);
console.log("-----");
