const express = require('express');
const AdminController = require("../controllers/admin.controller");

const router = express.Router();

// Categories
router.get('/categories', AdminController.categories.show);
router.post('/categories/add', AdminController.categories.add);
router.delete('/categories/remove/:id', AdminController.categories.remove);

module.exports = router;