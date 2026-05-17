const express = require("express");
const router = express.Router();

let tasks = [];
let nextId = 0;

router.get("/", (req, res) => {
  const { done } = req.query;

  if (done !== undefined) {
    const filtered = tasks.filter((t) => t.done === (done === "true"));
    return res.json(filtered);
  }

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

router.get("/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks.splice(index, 1);
  res.status(204).send();
});

router.patch("/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).json({ error: "Task not found" });

  task.done = true;
  res.json(task);
});

module.exports = router;
