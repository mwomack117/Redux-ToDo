const express = require("express");
const router = express.Router();

// Bring in todo model
const Todos = require("../models/todos");

// @route   GET api/todos/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Todos works" }));

// @route   POST api/todos
// @desc    Add task to todo list
// @access  Public
router.post("/", (req, res) => {
  const newTask = new Todos({
    task: req.body.task
  });
  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => console.log(err));
});

// @route   DELETE api/todos/task/:id
// @desc    Delete task from todo list
// @access  Public
router.delete("/task/:id", (req, res) => {
  Todos.findOneAndDelete({ _id: req.params.id }).then(() =>
    res.json({ success: true })
  );
});

module.exports = router;
