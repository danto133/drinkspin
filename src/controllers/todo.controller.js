const TodoService = require("../services/todo.service");

const TodoController = {};

TodoController.getAllTodos = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).json({ 
      data: todos
    });
  } catch (error) {
    res.status(400)
  }
}

TodoController.getDetailTodo = async (req, res) => {
  try {
    const todo = TodoService.getDetailTodo(req);
    res.status(200).json({ 
      data: todo
    });
  } catch (error) {
    
  }
}

module.exports = TodoController;