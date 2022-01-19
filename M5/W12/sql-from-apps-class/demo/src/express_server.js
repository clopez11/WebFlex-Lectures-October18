const express = require("express");

const port = 8080;
const app = express();

const urlsRouter = require("./routes/urlRoutes");
const usersRouter = require("./routes/userRoutes");

const pool = require("./database/connection");
const dbUrls = require("./database/urls")(pool);
const dbUsers = require("./database/users")(pool);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/urls", urlsRouter(dbUrls));
app.use("/users", usersRouter(dbUsers));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
