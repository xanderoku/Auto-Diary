const express = require("express");
// const { sessionChecker } = require("../middleware/auth");
const Car = require("../models/car");
const multer = require("multer");
const Work = require('../models/work')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  }
  cb(null, false);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
});

const router = express.Router();

// route for user signup
router.route("/register")
.post(upload.single("imgCar"), async (req, res) => {
 
  try {
    const car = await Car.create({
      owner: req.body.owner,
      brand: req.body.brand,
      model: req.body.model,
      mileage: req.body.mileage,
      vin: req.body.vin,
      imgCar: req.file.path
    });
    const success = true;
    res.json({ car, success });
  } catch (error) {
    const success = false;
    res.json({ success });
  }
});

//route for getting all cars

router.route("/allcars")
.post( async (req, res) => {
// console.log(req.body.user_id)
  try {
    const carAll = await Car.find({
      owner: req.body.user_id
    })
    // console.log("carAll: ", carAll);
    const success = true;
    res.json({ carAll, success });
  } catch (error) {
    const success = false;
    res.json({ success });
  }
});

router.route("/deletecar")
.delete(async (req, res) => {
  // try {
    await Car.deleteOne({
      id: req.body.car_id
    });
    const carAll = await Car.find({ owner: req.body.user_id });
    const carDeleted = true;
    res.json({ carAll });
  }) 
 
  router.route("/works").post(async (req, res) => {
    console.log(req.body)
    
  try {
    if(req.body.service === ""){
    const work = await Work.create({
    
      service: req.body.oftenService,
      mileage: req.body.mileage,
      price: req.body.price,
      car_id: req.body.car_id
    });
  } else {
    const work = await Work.create({
      service: req.body.service,
      
      mileage: req.body.mileage,
      price: req.body.price,
      car_id: req.body.car_id
    });
  }
    const workAdded = true;
    res.json({ work, workAdded });
  } catch (error) {
    const success = false;
    res.json({ success });
  }
  });

module.exports = router;
