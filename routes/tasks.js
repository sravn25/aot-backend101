const express = require("express");
const router = express.Router();

let tasks = [];
let nextId = 0;

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = { id: nextId++, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
