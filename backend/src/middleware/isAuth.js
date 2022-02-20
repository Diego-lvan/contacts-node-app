const isAuth = (req, res, next) => {
  if (req.user == undefined) {
    return res.json({ success: false, msg: "Unauthorized", status: 401 });
  }
  next();
};

module.exports = isAuth;
