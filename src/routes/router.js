// const express = require("express");
// const TodoController = require("../controllers/todo.controller");

// const router = express.Router();

// // router.get("/", TodoController.getAllTodos)
// router.use("/123", (req, res) => {
//   res.json({
//     message: "23asdasxzc123dsadas"
//   })
// })
// router.use("/", (req, res) => {
//   res.json({
//     message: "23123dsadas"
//   })
// })
const todoRoute = require("./todo.route");

const router = (app) => {
  app.use('/api', todoRoute);
  app.use('*', (req, res) => res.status(400).json({ message: "Not Found!!" }));
}

module.exports = router;