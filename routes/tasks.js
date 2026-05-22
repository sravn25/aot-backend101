const express = require("express");
const router = express.Router();
const store = require("../data/store");

router.get("/", async (req, res) => {
  const tasks = await store.getAll();
  const { done } = req.query;

  if (done !== undefined) {
    const filtered = tasks.filter((t) => t.done === (done === "true"));
    return res.json(filtered);
  }

  res.json(tasks);
});

router.post("/", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const task = await store.create(title);
  res.status(201).json(task);
});

router.get("/:id", async (req, res) => {
  const task = await store.getById(req.params.id);

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

router.delete("/:id", async (req, res) => {
  const removed = await store.remove(req.params.id);

  if (!removed) return res.status(404).json({ error: "Task not found" });

  res.status(204).send();
});

router.patch("/:id", async (req, res) => {
  const task = await store.update(req.params.id, req.body);

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

module.exports = router;
