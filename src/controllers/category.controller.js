const CategoryService = require('../services/category.service');
const { multipleToObject } = require('../utils/mongoose');

const CategoryController = {};

CategoryController.show = (req, res, next) => {
  Promise.all([
    CategoryService.getAllCaterories(),
  ])
    .then(([categories]) => {
      res.render('admin/categories', {
        categories: multipleToObject(categories)
      })
    })
    .catch(next)
}

CategoryController.add = async (req, res, next) => {
  try {
    await CategoryService.addCategory(req.body);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

CategoryController.remove = async (req, res, next) => {
  try {
    await CategoryService.removeCategory(req.params);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

module.exports = CategoryController;