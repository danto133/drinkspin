const express = require("express");
const DrinkController = require("../controllers/drink.controller");

const router = express.Router();

router.get("/", DrinkController.index)
// router.get("/todo/:id", TodoController.getDetailTodo)


module.exports = router;