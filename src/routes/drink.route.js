const express = require("express");
const DrinkController = require("../controllers/drink.controller");

const router = express.Router();

router.get("/", DrinkController.index)

module.exports = router;