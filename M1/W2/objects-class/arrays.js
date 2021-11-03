const countries = ["Canada", "USA", "Iceland", "Ireland"];

// index based, starts at 0
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

// How do we store related data?
const team2019 = "Raptors";
const year2019 = 2019;
const mvp2019 = "Leonard";

const team2020 = "Lakers";
const year2020 = 2020;
const mvp2020 = "James";

// Improve by adding all values in array
const teams1 = ["Raptors", 2019, "Leonard", "Lakers", 2020, "James"];
console.log(teams1[0]);
console.log(teams1[1]);
console.log(teams1[2]);

// Slightly improve again by storing inside array of arrays
const teams2 = [
  ["Raptors", 2019, "Leonard"],
  ["Lakers", 2020, "James"],
  ["Bucks", 2021, "Giannis"],
];
console.log(teams2[0]);
console.log(teams2[0][0]);
console.log(teams2[0][1]);
console.log(teams2[0][2]);
