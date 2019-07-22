const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  millage: Number,
  vin: String,
  img: String
});

module.exports = mongoose.model("Car", carSchema);
