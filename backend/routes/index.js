const express = require("express");
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const { sessionChecker } = require("../middleware/auth");
const authNew = require('../middleware/authNew');

const User = require("../models/user");

const router = express.Router();

router.get("/", authNew, (req, res) => {
  res.send('lol?');
});

router.get('/checkToken', authNew, function(req, res) {
  res.send('available with token only!');
});

router
  .route("/signup")
  .get(authNew, (req, res) => {
    res.send("get signup here!");
  })
  .post(async (req, res) => {
    console.log("reg post: ", req.body);
    const { email, password } = req.body;
    const user = new User({
      email,
      password
    });
    await user.save(err => {
      if (err) {
        res.status(500).send("Error signing up, please try again.");
      } else {
        res.status(200).send("Welcome to the Auto Diary!");
      }
      // req.session.user = user;
    });
  });

//new login router
router.post("/login", function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password"
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password"
          });
        } else {
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

// route for user Login
// router
//   .route("/login")
//   .get(sessionChecker, (req, res) => {
//     res.render("login");
//   })
//   .post(async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const user = await User.findOne({ username });
//     if (!user) {
//       res.redirect("/login");
//       // } else if (!user.validPassword(password)) {
//     } else if (user.password !== password) {
//       res.redirect("/login");
//     } else {
//       req.session.user = user;
//       res.redirect("/dashboard");
//     }
//   });

// route for user's dashboard
router.get("/dashboard", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render("dashboard");
  } else {
    res.redirect("/login");
  }
});

// route for user logout
router.get("/logout", async (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    try {
      // res.clearCookie('user_sid');
      await req.session.destroy();
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
