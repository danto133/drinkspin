const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
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

module.exports = DrinkModel