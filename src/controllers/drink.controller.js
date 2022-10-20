const DrinkService = require("../services/drink.service");
const CategoryService = require('../services/category.service');

const { multipleToObject } = require('../utils/mongoose');

const DrinkController = {};

DrinkController.index = (req, res, next) => {
  Promise.all([
    CategoryService.getAllCaterories()
  ])
    .then(([categories]) => {
      console.log(categories);
      res.render('home', {
        categories: multipleToObject(categories),
      });
    })
    .catch(next);
}

DrinkController.show = (req, res, next) => {
  Promise.all([
    DrinkService.getAllDrinks()
  ])
    .then(([drinks]) => {
      res.render('admin/drinks', {
        drinks: multipleToObject(drinks),
      });
    })
    .catch(next);
}

DrinkController.add = async (req, res, next) => {
  try {
    await DrinkService.addDrink(req.body);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

DrinkController.remove = async (req, res, next) => {
  try {
    await DrinkService.removeDrink(req.params);
    res.redirect('back');
  } catch (error) {
    next(error);
  }
}

module.exports = DrinkController;