const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
const taskRouter = require("./routes/tasks");
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
