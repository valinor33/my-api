const { User, Todo } = require("../models");

const valinorController = {
  /* HOME */
  home: async (req, res) => {
    res.render("home", {});
  },
  /* TODO APP */
  todo: async (req, res) => {
    const todos = await Todo.find({});
    res.render("todo", { todos });
  },
  newTodo: async (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({
      todo,
      completed: false,
    });
    await newTodo.save();
    res.redirect("/todo");
  },
  editTodo: async (req, res) => {
    const todoId = await Todo.findById(req.params.id);
    console.log(todoId);
    res.redirect("/todo");
  },
};

module.exports = valinorController;
