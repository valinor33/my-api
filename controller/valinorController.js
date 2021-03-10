const db = require("../models");

const valinorController = {
  home: async (req, res) => {
    res.send("<h1>Valinor app</h1>");
  },
};

module.exports = valinorController;
