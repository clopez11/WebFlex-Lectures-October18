// adding functions in objects
const teams = {
  teamName: "Raptors0",
  year: 20190,
  mvp: "Leonard0",
  city: "Toronto0",

  printDetails: function () {
    console.log(
      `${this.teamName} won in ${this.year} with ${this.mvp} as finals mvp.`
    );
  },
};
console.log(teams.printDetails());
