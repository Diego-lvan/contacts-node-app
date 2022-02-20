const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { conn } = require("./config/conn");
const passport = require("passport");
const authRouter = require("./routes/auth.js");
const contactRouter = require("./routes/contacts");
const path = require("path");
const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const sessionStore = new MySQLStore({}, conn);

app.use(
  session({
    secret: "some secret",
    resave: false,
    secure: true,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 60 * 1000 * 60 * 24,
    },
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);
app.use(contactRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`listening in ${process.env.PORT}`)
);
