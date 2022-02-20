const { query } = require("../config/conn");

const createContact = async (req, res, next) => {
  const { number, user, contactName } = req.body;
  if (number.length > 10 || user.length > 25 || contactName.length > 80) {
    return res.json({ success: false, status: 400 });
  }
  const sql =
    "INSERT INTO contact (contact_number,username,contact_name) VALUES (?,?,?)";
  await query(sql, [number, user, contactName]);
  res.json({ success: true });
};

const contactExists = async (req, res, next) => {
  const { user, number } = req.body;
  const sql = "SELECT * FROM contact WHERE contact_number=? AND username=?";
  const result = await query(sql, [number, user]);
  if (result.length > 0) {
    return res.json({ success: false, msg: "Contact already exists" });
  }
  next();
};

module.exports = { createContact, contactExists };
