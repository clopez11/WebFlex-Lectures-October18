const teams = {
  city: "Toronto",
  team: "Raptors",
  year: 2019,
  mvp: "Leonard",
  players: ["Lowry", "VanVleet", "Baynes"],
};

// iterables (arrays): for | for of | for each
// objects: for in
for (const key in teams) {
  if (Array.isArray(teams[key])) {
    const players = teams[key];
    for (const name of players) {
      console.log(`players: ${name}.`);
    }
  }
}
