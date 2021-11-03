// Arrays are great for ordered lists. But not for adding context to our data.
const team = ["Raptors", 2019, "Leonard"];

// Objects: key/value pairs
const champions = {
  team: "Raptors",
  year: [2019, 2027, 2028, 2029],
  mvp: ["Leonard", "Player MVP2", "Player MVP3"],
  roster: {
    1995: ["Player 1", "Player 2", "Player 2"],
    1996: ["Player 1", "Player 2", "Player 2"],
    1997: ["Player 1", "Player 2", "Player 2"],
    1998: ["Player 1", "Player 2", "Player 2"],
  },
  printMvps: function () {
    const roster = champions.mvp;
    for (const player of roster) {
      console.log(`MVP: ${player}`);
    }
  },
};
console.log(champions);
console.log(champions.printMvps());

// Accessing Objects
console.log("-----bracket notation");
console.log(champions["team"]);
console.log(champions["year"]);
console.log(champions["mvp"]);
console.log("-----dot notation");
console.log(champions.team);
console.log(champions.year);
console.log(champions.mvp);

// We have to use [] notation
const inning = "status"; // being sent by API.

const game = {
  code: "MLB",
  ID: 1,
  vtricode: "STL",
  vname: "Cardinals",
  status: "Bot 8th",
};

console.log(game["status"]); // output: Bot 8th
console.log(game[inning]); // output: Bot 8th, using the value being passed in variable to search our game
console.log(game.inning); // undefined because inning key does not exists in game object
