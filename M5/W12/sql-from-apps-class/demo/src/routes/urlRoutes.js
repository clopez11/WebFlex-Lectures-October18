const express = require("express");
const router = express.Router();

module.exports = (dbUrls) => {
  // GET /urls
  router.get("/", (req, res) => {
    res.send("urls list");
  });

  // POST /urls
  router.post("/", (req, res) => {});

  // POST /urls/:short/edit
  router.post("/:short/edit", (req, res) => {});

  // POST /urls/:short/delete
  router.post("/:short/delete", (req, res) => {});

  return router;
}
