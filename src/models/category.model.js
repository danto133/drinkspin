const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true,
    }
}, {
    timestamps: true,
})

const CategoryModel = mongoose.model('Categories', CategorySchema, 'categories')

// Add plugin
mongoose.plugin(slug);

module.exports = CategoryModel;