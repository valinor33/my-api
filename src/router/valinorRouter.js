const express = require("express");
const router = express.Router();

const valinorController = require("../controller/valinorController");

/* HOME */
router.get("/", valinorController.home);
/* TODO APP */
router.get("/todo", valinorController.todo);
router.post("/todo", valinorController.newTodo);
router.get("/todo/update/:id", valinorController.updateTodo);
router.get("/todo/delete/:id", valinorController.deleteTodo);

module.exports = router;
