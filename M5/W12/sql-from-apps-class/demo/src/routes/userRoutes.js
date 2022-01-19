const express = require("express");
const router = express.Router();

module.exports = (dbUsers) => {
  // GET /users
  router.get("/", (req, res) => {
    const { id } = req.query;

    if(!id) {
      dbUsers
        .getUsers()
        .then(users => res.json(users))
        .catch(error => console.log(error.message));
    } else {
      dbUsers
        .getUserById(id)
        .then(users => res.json(users))
        .catch(error => console.log(error.message));
    }
  });

  // GET /users/:id
  router.get("/:id", (req, res) => {
    // get email from user id.
  });

  return router;
}
