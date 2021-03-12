require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

/* PORT */
const PORT = process.env.PORT || 3000;

const valinorRouter = require("./router/valinorRouter");
const morgan = require("morgan");

/* MIDDLEWARE */
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* VIEW ENGINE */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* ROUTER */
app.use(valinorRouter);

/* CONNECTION */
app.listen(PORT, () => {
  console.log(`Enter to: http://localhost:${PORT}`);
});
