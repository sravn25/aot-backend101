let tasks = [];
let nextId = 1;

module.exports = {
  getAll() {
    return tasks;
  },

  getById(id) {
    return tasks.find((t) => t.id === id);
  },

  create(title) {
    const task = { id: nextId++, title, done: false };
    tasks.push(task);
    return task;
  },

  update(id, changes) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return null;
    Object.assign(task, changes);
    return task;
  },

  remove(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  },
};
