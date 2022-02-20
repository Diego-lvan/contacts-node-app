const authRouter = require("express").Router();
const { accountExists } = require("../middleware/validAccount");
const { createAcc, logoutUser } = require("../controllers/auth");
const isAuth = require("../middleware/isAuth");
const passport = require("passport");

//login

authRouter.post("/", passport.authenticate("local"), (req, res) => {
  res.json({ username: req.user, success: true });
});

//logout
authRouter.post("/logout", [isAuth, logoutUser]);

//register
authRouter.post("/register", [
  accountExists,
  createAcc,
  passport.authenticate("local"),
  (req, res) => {
    res.json({ username: req.user, success: true });
  },
]);

//profile

authRouter.get("/profile", isAuth, (req, res) => {
  const { user } = req;
  res.json({ success: true, username: user });
});

//check if user is logged
authRouter.get("/islogged", (req, res) => {
  const isAuth = req.user ? true : false;
  res.json({ isAuth });
});

module.exports = authRouter;
