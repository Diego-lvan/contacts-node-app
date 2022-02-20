const bcrypt = require("bcrypt");
const { query } = require("../config/conn");

const createAccount = async (req, res, next) => {
  const { username, password } = req.body;
  if (username.length > 25) {
    return res.json({ success: false, status: 400 });
  }
  const hashedPwd = await bcrypt.hash(password, 10);
  const sql = "INSERT INTO user (username,password) VALUES (?,?)";
  await query(sql, [username, hashedPwd]);
  next();
};

const logoutUser = async (req, res) => {
  req.session.passport = {};
  req.user = null;
  res.json({ success: true });
};

module.exports = { createAcc: createAccount, logoutUser };
