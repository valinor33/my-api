const db = require("../models");

const valinorController = {
  /* HOME */
  home: async (req, res) => {
    res.render("home", {});
  },
  /* TODO APP */
  todo: async (req, res) => {
    res.render("todo", {});
  },
  newTodo: async (req, res) => {
    res.send(req.body);
  },
};

module.exports = valinorController;
