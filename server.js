require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const PORT = process.env.APP_PORT;

const valinorRouter = require("./router/valinorRouter");

/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* VIEW ENGINE */
app.set("view engine", "ejs");

/* ROUTER */
app.use(valinorRouter);

/* CONNECTION */
app.listen(PORT, () => {
  console.log(`Enter to: http://localhost:${PORT}`);
});
