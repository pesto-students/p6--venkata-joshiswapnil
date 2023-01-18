const planets = require("../../models/model");

const getIncomeByUser = async (req, res) => {
  const user = req.user;
  const income = await Income.find({ user });

  if (income) {
    res.json({
      status: true,
      data: income
    });
  } else {
    res.json({ status: false, message: "Data not found!" });
  }
};

const addIncome = async (req, res) => {
  const { user, date, name, amount } = req.body;
  try {
    const income = await Income.create({
      user,
      name,
      amount,
      date
    });
    res.json({ status: true, data: income });
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { incomeId } = req.params;
    const income = await Income.findById({ _id: incomeId });

    if (income) {
      await income.delete();
      res.json({ status: true, message: "Income removed" });
    } else {
      res.status(404);
      res.json({ status: false, message: "Income not found" });
    }
  } catch (error) {
    res.json({ status: false, message: "Something went wrong!" });
  }
};

module.exports = { getIncomeByUser, addIncome, deleteIncome };