const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

async function authenticate(req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res
        .status(401)
        .json({ status: false, message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    res
      .status(401)
      .json({ status: false, message: "Not authorized, no token" });
  }
}

module.exports = { authenticate };