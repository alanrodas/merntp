const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: {
    type: String,
    required: [true, "por favor ingrese una Marca"]
  },
  model: { type: String, required: [true, "por favor ingrese un Modelo"] },
  category: { type: String, required: true, enum: ["A", "B", "C", "D", "E"] },
  price: { type: Number },
  numDoors: { type: Number, required: true, min: 2, max: 7 }
});

module.exports = mongoose.model("Car", carSchema);
