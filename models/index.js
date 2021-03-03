const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () =>
  console.log("¡Conexión con la base de datos establecida!")
);

module.exports = { mongoose, User };
