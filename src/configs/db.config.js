const mongoose = require("mongoose");

const connectDatabase = () => {
  const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
  console.log(`Connecting to ${mongoDbUrl}`);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(mongoDbUrl)
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...`);
      console.log(err);
      process.exit();
    });
}

module.exports = connectDatabase;