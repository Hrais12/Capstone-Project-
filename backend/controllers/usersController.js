const User = require("../models/user");
// ----------------------------------------
const bcrypt = require("bcryptjs");
// Encrypt Password? --> use bcrypt
const jwt = require("jsonwebtoken");
// ----------------------------------------

const signup = async (req, res) => {
  // 1. Get Email and Password - [req.body]
  const { email, password } = req.body;
  // ** Hash Password **
  const hashedPassword = bcrypt.hashSync(password, 8);

  // 2.Create User
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });
  console.log("User Created", newUser);
  // Send Response
  res.sendStatus(200);
};

const login = async (req, res) => {
  try {
    // 1. Get email and password -[req.body]
    const { email, password } = req.body;
    // 2. Find User with requested email
    const user = await User.findOne({ email });
    console.log(`User: ${user}`);
    if (!user) return res.sendStatus(401);
    // 3. Compare password with foundUser
    const passwordMatch = await bcrypt.compareSync(password, user.password);
    console.log("Password Verified");
    if (!passwordMatch) return res.sendStatus(401);
    // 4. Create JWT

    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    console.log(exp);
    // ----milisec: ---> 2sec- imin-1day-30days
    // setting an expiration date for token(ie:30days)
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    console.log("Token:", token);

    // -----Cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      //   sets expiration
      httpOnly: true,
      // allows only browser and server to read
      sameSite: "lax",
    });
    res.sendStatus(200);
    // Cookie - data that our servers will send to browser and store in cache.
    // Cookies save information about a user's session
    // by default express doesnt read cookies off request body so u need an npm package :cookie-parser

    // 5. Send Response
  } catch (error) {
    console.log(error);
  }
};
const logout = (req, res) => {
  res.clearCookie("Authorization");
  res.sendStatus(200);
  console.log(`Successfully Logged Out`);
};

const checkAuth = (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
};

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
