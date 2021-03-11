const { User, Todo } = require("../models");

const valinorController = {
  /* HOME */
  home: async (req, res) => {
    res.render("home", {});
  },
  /* TODO APP CRUD */
  todo: async (req, res) => {
    const todos = await Todo.find({});
    res.render("todo", { todos });
  },
  newTodo: async (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({
      todo,
    });
    await newTodo.save();
    res.redirect("/todo");
  },
  deleteTodo: async (req, res) => {
    await Todo.findById(req.params.id).then((todo) => {
      if (!todo) {
        res.render("error404", {});
      }
      todo.remove();
      res.redirect("/todo");
    });
  },
  updateTodo: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed;
    todo.save();
    res.redirect("/todo");
  },
  /* USER CRUD */
};

module.exports = valinorController;
