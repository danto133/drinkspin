const CategoryService = require('../services/category.service');
const { multipleToObject } = require('../utils/mongoose');

const AdminController = {};
AdminController.categories = {};

AdminController.categories.show = (req, res, next) => {
  Promise.all([
    CategoryService.getAllCaterories(),
  ])
    .then(([categories]) => {
      res.render('admin/add-categories', {
        categories: multipleToObject(categories)
      })
    })
    .catch(next)
}

AdminController.categories.add = async (req, res, next) => {
  try {
    await CategoryService.addCategory(req.body);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

AdminController.categories.remove = async (req, res, next) => {
  try {
    await CategoryService.removeCategory(req.params);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

module.exports = AdminController;