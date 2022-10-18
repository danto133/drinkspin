const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./src/configs/db.config");
const router = require("./src/routes/router")
dotenv.config();

db();

const port = process.env.PORT || 3333;
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

router(app);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});