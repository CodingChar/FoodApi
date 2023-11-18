const { Schema, Model, model } = require("mongoose");

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  kcal: {
    type: Number,
    required: true
  },
});

const  Food = model('foods', FoodSchema)
module.exports = {Food}