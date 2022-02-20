const { query } = require("../config/conn");
const accountExists = async (req, res, next) => {
  const { username } = req.body;
  const sql = "SELECT * FROM user WHERE username=?";
  const result = await query(sql, [username]);
  if (result.length > 0) {
    return res.json({
      success: false,
      msg: "User already exists",
      status: 400,
    });
  }
  next();
};

module.exports = { accountExists };
