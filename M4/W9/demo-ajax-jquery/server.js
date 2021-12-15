const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/**
 * Test Data
 */
const dogs = [
  {
    name: "Maui",
  },
  {
    name: "Winter",
  },
  {
    name: "Leo",
  },
];

/**
 * Define the routes below.
 */
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.get("/dogs", function(req, res) {
  res.json(dogs);
});

app.post("/dogs", function(req, res) {
  dogs.push({
    name: req.body.name,
  })

  res.json({ name: req.body.name });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
