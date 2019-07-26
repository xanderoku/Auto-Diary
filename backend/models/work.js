const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  service: String,
  oftenService: String,
  mileage: String,
  price: Number,
  car_id: String,
  date: {type: String, default: new Date()}
});

module.exports = mongoose.model("Work", workSchema);
