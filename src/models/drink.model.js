const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  price: {
    type: Number,
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true,
  },
}, {
  timestamps: true,
})

const DrinkModel = mongoose.model("Drinks", DrinkSchema, "drinks");

// Add plugin
mongoose.plugin(slug);

module.exports = DrinkModel;