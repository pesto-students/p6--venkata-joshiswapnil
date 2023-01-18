const Expense = require("../../models/expense.model");

async function getExpenseByUser(req, res) {
  const user = req.user;
  const expense = await Expense.find({ user });

  if (expense) {
    res.json({
      status: true,
      data: expense,
    });
  } else {
    res.json({ status: false, message: "Data not found!" });
  }
}

async function addExpense(req, res) {
  const { user, name, amount, date } = req.body;
  try {
    const expense = await Expense.create({
      user,
      name,
      amount,
      date,
    });
    res.json({ status: true, data: expense });
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
}

async function deleteExpense(req, res) {
  try {
    const { expenseId } = req.params;
    const expense = await Expense.findById({ _id: expenseId });

    if (expense) {
      await expense.delete();
      res.json({ status: true, message: "Expense removed" });
    } else {
      res.status(404);
      res.json({ status: false, message: "Expense not found" });
    }
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
}

module.exports = { getExpenseByUser, addExpense, deleteExpense };