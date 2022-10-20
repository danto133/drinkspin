const drinkRoute = require("./drink.route");
const adminRoute = require("./admin.route");

const router = (app) => {
  app.use('/admin', adminRoute);
  app.use('/', drinkRoute);
  app.use('*', (req, res) => res.status(400).json({ message: "Not Found!!" }));
}

module.exports = router;