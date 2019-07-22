const express = require("express");
// const { sessionChecker } = require("../middleware/auth");
const Car = require("../models/car");
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})

const router = express.Router();
// route for Home-Page
// router.get("/", sessionChecker, (req, res) => {
//   res.redirect("/login");
// });

// route for user signup
router
  .route("/register")
  //   .get(sessionChecker, (req, res) => {
  //     res.render("signup");
  //   })
  .post(upload.single("imgCar"), async (req, res) => {
    try {
      const car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        millage: req.body.millage,
        vin: req.body.vin,
        imgCar: req.file
      });
      await car.save();
      const success = true;
      res.json({ car, success });
    } catch (error) {
      const success = false;
      res.json({ success });
    }
  });

module.exports = router;