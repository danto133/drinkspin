const express = require("express");
const TodoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/todo/:id", TodoController.getDetailTodo)

router.get("/todos", TodoController.getAllTodos)

module.exports = router;