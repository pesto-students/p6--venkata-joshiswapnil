const express = require("express");
const {
  getIncomeByUser,
  addIncome,
  deleteIncome,
} = require("./income.controller");

const incomeRouter = express.Router();

incomeRouter.route("/income/all").post(authenticate, getIncomeByUser);
incomeRouter.route("/income/add").post(authenticate, addIncome);
incomeRouter
  .route("/income/delete/:incomeId")
  .delete(authenticate, deleteIncome);

module.exports = incomeRouter;