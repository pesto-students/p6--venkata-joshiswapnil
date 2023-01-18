const users = require("../../models/user.model");

async function userRegister(req, res) {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.json({
      status: true,
      message: "User registered successfully!",
      data: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.json({ status: false, message: "User already exist!" });
  }
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      res.json({
        status: true,
        message: "Logged in",
        data: {
          id: user._id,
          email: user.email,
          name: user.name,
          token: generateToken(user._id),
        },
      });
    } else {
      res.json({ status: false, message: "Invalid Password" });
    }
  } else {
    res.json({ status: false, message: "User not found!" });
  }
}

module.exports = { userRegister, userLogin };