const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  owner: String,
  brand: String,
  model: String,
  mileage: Number,
  vin: String,
  imgCar: String,
  works: Array
});

module.exports = mongoose.model("Car", carSchema);
