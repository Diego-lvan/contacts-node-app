const { query } = require("../config/conn");

const showContacts = async (req, res, next) => {
  const username = req.user;
  const sql = "SELECT * FROM contact WHERE username=?";
  const contacts = await query(sql, [username]);
  res.json({ contacts });
};
const getContact = async (req, res, next) => {
  const username = req.user;
  const { id } = req.params;
  const sql = "SELECT * FROM  contact WHERE username=? AND id=?";
  const [contact] = await query(sql, [username, id]);
  if (contact === undefined) {
    return res.json({ status: 404, success: false });
  }
  res.json({ contact, success: true, code: 200 });
};

const createContact = async (req, res, next) => {
  if (req.contactExists) {
    return res.json({
      success: false,
      msg: "Contact already exists",
      status: 409,
    });
  }
  const { number, contactName } = req.body;
  const { user } = req;
  if (number.length > 10 || contactName.length > 80) {
    return res.json({ success: false, status: 400 });
  }
  const sql =
    "INSERT INTO contact (contact_number,username,contact_name) VALUES (?,?,?)";
  await query(sql, [number, user, contactName]);
  res.json({
    status: 201,
    success: true,
  });
};

const contactExists = async (req, res, next) => {
  const number = req.body.number || req.params.number;
  const user = req.user;
  req.contactExists = false;
  const sql = "SELECT * FROM contact WHERE contact_number=? AND username=?";
  const result = await query(sql, [number, user]);
  if (result.length > 0) {
    req.contactExists = true;
  }
  next();
};
//delete
const deleteContact = async (req, res, next) => {
  const { number } = req.params;
  const { user } = req;
  if (!req.contactExists) {
    return res.json({ success: false, msg: "Contact does not exists" });
  }
  const sql = "DELETE FROM contact WHERE contact_number = ? AND username=?";
  await query(sql, [number, user]);
  res.json({ status: 204, success: true });
};

//edit contact
const updateContact = async (req, res) => {
  const { number, contactName, id } = req.body;
  if (number.length > 10 || contactName > 80) {
    return res.json({ success: false, status: 400 });
  }
  const { user } = req;
  const sql =
    "UPDATE contact SET contact_number=?,contact_name=? WHERE id=? AND username=?";
  await query(sql, [number, contactName, id, user]);
  res.json({ success: true, status: 204 });
};

module.exports = {
  showContacts,
  createContact,
  contactExists,
  deleteContact,
  getContact,
  updateContact,
};
