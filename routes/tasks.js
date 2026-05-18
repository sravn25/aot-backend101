const express = require("express");
const router = express.Router();
const store = require("../data/store");

router.get("/", (req, res) => {
  const { done } = req.query;
  const tasks = store.getAll();

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

  res.status(201).json(store.create(title));
});

router.get("/:id", (req, res) => {
  const task = store.getById(parseInt(req.params.id));

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const removed = store.remove(parseInt(req.params.id));

  if (!removed) return res.status(404).json({ error: "Task not found" });

  res.status(204).send();
});

router.patch("/:id", (req, res) => {
  const task = store.update(parseInt(req.params.id), req.body);

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

module.exports = router;
