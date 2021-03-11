const express = require("express");
const router = express.Router();

const valinorController = require("../controller/valinorController");

/* HOME */
router.get("/", valinorController.home);
/* TODO APP */
router.get("/todo", valinorController.todo);
router.post("/todo", valinorController.newTodo);
router.get("/todoEdit/:id", valinorController.editTodo);

module.exports = router;
