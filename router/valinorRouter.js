const express = require("express");
const router = express.Router();

const valinorController = require("../controller/valinorController");

router.get("/", valinorController.home);

module.exports = router;
