const CategoryModel = require('../models/category.model');
const CategoryService = {};

// Category
CategoryService.getAllCaterories = async () => {
    return await CategoryModel.find({});
};

CategoryService.addCategory = async (args) => {
    const categories = CategoryModel(args);
    await categories.save();
}

CategoryService.removeCategory = async (args) => {
    await CategoryModel.deleteOne({ _id: args.id });
}

module.exports = CategoryService;