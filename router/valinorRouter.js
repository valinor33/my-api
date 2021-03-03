const express = require("express");
const router = express.Router();

const valinorController = require("../controller");
router.get("/", (req, res) => {
  res.json({ msg: "Entró" });
});

module.exports = router;
