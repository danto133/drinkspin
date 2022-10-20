const TodoService = require("../services/drink.service");
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
  // res.json({
  //   mesage: 'adf'
  // })
}

// TodoController.getAllTodos = async (req, res) => {
//   try {
//     const todos = await TodoService.getAllTodos();
//     res.status(200).json({ 
//       data: todos
//     });
//   } catch (error) {
//     res.status(400)
//   }
// }

// TodoController.getDetailTodo = async (req, res) => {
//   try {
//     const todo = TodoService.getDetailTodo(req);
//     res.status(200).json({ 
//       data: todo
//     });
//   } catch (error) {
    
//   }
// }

module.exports = DrinkController;