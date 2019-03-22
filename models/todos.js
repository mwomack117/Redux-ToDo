const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create our todo model
const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  importance: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = Todos;
