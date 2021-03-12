const mongoose = require("mongoose");
const User = require("./User");
const Todo = require("./Todo");

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () =>
  console.log("¡Conexión con la base de datos establecida!")
);

module.exports = { mongoose, User, Todo };
