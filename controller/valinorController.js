const db = require("../models");

const valinorController = {
  home: async (req, res) => {
    res.send("<h1>Esto es un H1</h1>");
  },
};

module.exports = valinorController;
