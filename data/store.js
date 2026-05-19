const Task = require("./Task");

module.exports = {
  getAll() {
    return Task.find();
  },

  getById(id) {
    return Task.findById(id);
  },

  create(title) {
    return Task.create({ title });
  },

  update(id, changes) {
    return Task.findByIdAndUpdate(id, changes, { new: true });
  },

  remove(id) {
    return Task.findByIdAndDelete(id);
  },
};
