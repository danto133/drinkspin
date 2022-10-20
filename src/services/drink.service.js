const DrinkModel = require("../models/drink.model");
const DrinkService = {};

DrinkService.getAllDrinks = async () => {
  return await DrinkModel.find({})
}

DrinkService.getDetailDrink = async (req) => {
  return await DrinkModel.findOne({id: req.params.id})
}

DrinkService.addDrink = async (args) => {
  const drink = DrinkModel(args);
  await drink.save();
}

DrinkService.removeDrink = async (args) => {
  await DrinkModel.deleteOne({ _id: args.id });
}


module.exports = DrinkService;