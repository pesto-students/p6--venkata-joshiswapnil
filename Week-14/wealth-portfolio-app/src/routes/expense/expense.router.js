const express = require("express");
const { getExpenseByUser, addExpense, deleteExpense } = require("./expense.controller");
const authenticate = require("../../middleware/middleware"); 

const expenseRouter = express.Router();

expenseRouter.route("/expense/all").post(authenticate, getExpenseByUser);
expenseRouter.route("/expense/add").post(authenticate, addExpense);
expenseRouter
  .route("/expense/delete/:expenseId")
  .delete(authenticate, deleteExpense);

module.exports = expenseRouter;