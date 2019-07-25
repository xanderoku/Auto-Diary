const express = require("express");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

// const { sessionChecker } = require("../middleware/auth");
const authNew = require("../middleware/authNew");

const User = require("../models/user");

const router = express.Router();

router.get("/", authNew, (req, res) => {
  res.send("lol?");
});

router.get("/checkToken", authNew, function(req, res) {
  res.sendStatus(200);
});

router
  .route("/signup")
  .get(authNew, (req, res) => {
    // res.send("get signup here!");
    // console.log("get signup here!");
  })
  .post(async (req, res) => {
    // console.log("reg post: ", req.body);
    const { email, password } = req.body;
    const user = new User({
      email,
      password
    });
    await user.save(err => {
      if (err) {
        res.status(500).send("Error signing up, please try again.");
      } else {
        res.status(200).send("Logged in to the Auto Diary!");
      }
      // req.session.user = user.email;
      // console.log(req.session.user);
    });
  });

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
      user.isCorrectPassword(password, async function(err, same) {
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
          const isAuth = true;
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
          });
          const userId = await User.findOne({ email });
          res.cookie("token", token, { httpOnly: true });
          res.cookie("user" , userId.id);
          res.sendStatus(200);
          // res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

router.get("/logout", (req, res, next) => {
  try {
    res.clearCookie("token");
    // await req.session.destroy();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
