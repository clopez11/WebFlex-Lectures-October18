const teams = {
  name: "Raptors",
  year: 2019,
  mvp: "Leonard",
};
console.log("teams", teams);

// Add new key/value pairs
teams.city = "Toronto";
console.log("add city to teams", teams);

// Update in [] notation
teams["year"] = 2022;
console.log("update year in teams", teams);

// // Keep key/value pairs without deleting
teams["year"] = null;
console.log("update year without deleting", teams);

// Delete
delete teams.year;
console.log("delete year in teams", teams);

// Create from an empty object
const teams2 = {};
teams2.name = "Bucks";
teams2.year = 2021;
teams2.mvp = "Giannis";
console.log("teams2", teams2);

teams2.players = ["Lowry", "VanVleet", "Baynes"];
console.log("teams2", teams2);

// Get players array from teams2
console.log("------dot---------");
console.log(teams2.players[0]);
console.log(teams2.players[1]);
console.log(teams2.players[2]);
console.log("------bracket-----");
console.log(teams2["players"][0]);
console.log(teams2["players"][1]);
console.log(teams2["players"][2]);
