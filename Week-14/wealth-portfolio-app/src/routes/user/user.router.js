const express = require("express");
const { userRegister, userLogin } = require("./user.controller");

const userRouter = express.Router();

userRouter.route("/users/register").post(userRegister);
userRouter.route("/users/login").post(userLogin);

module.exports = userRouter;