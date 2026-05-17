const express = require("express");
const router = express.Router();

let tasks = [];

router.get("/", (req, res) => {
  res.json(tasks);
});

module.exports = router;
