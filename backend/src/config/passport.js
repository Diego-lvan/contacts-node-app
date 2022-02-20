const passport = require("passport");
const LocalStrategy = require("passport-local");
const query = require("./conn").query;
const bcrypt = require("bcrypt");

const verify = async (username, password, done) => {
  const sql = "SELECT * FROM user WHERE username=? ";
  const user = await query(sql, [username]);
  if (user.length != 1) return done(null, false); //user does not exit
  const pwdHashed = user[0].password;
  const isValid = await bcrypt.compare(password, pwdHashed);
  if (!isValid) {
    return done(null, false); //incorrect password
  }
  done(null, user[0].username);
};

const strategy = new LocalStrategy(verify);
passport.use(strategy);

passport.serializeUser((user, done) => {
  //saves user in session.passport.user
  done(null, user);
});

passport.deserializeUser(async (username, done) => {
  //req.logout req.isAutheticated
  // grabs the username from session.passport.user and adds it to req.user
  const sql = "SELECT * FROM user WHERE username=? ";
  const user = await query(sql, [username]);
  done(null, user[0].username);
});
