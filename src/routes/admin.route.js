const express = require('express');
const CategoryController = require("../controllers/category.controller");
const DrinkController = require("../controllers/drink.controller");

const router = express.Router();

// Categories
router.get('/categories', CategoryController.show);
router.post('/categories/add', CategoryController.add);
router.delete('/categories/remove/:id', CategoryController.remove);

// Drink
router.get('/drinks', DrinkController.show);
router.post('/drinks/add', DrinkController.add);
router.delete('/drinks/remove/:id', DrinkController.remove);

module.exports = router;