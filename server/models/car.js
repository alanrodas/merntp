const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Car", carSchema);
