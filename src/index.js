const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
const cors = require("cors");
const dotenv = require("dotenv");
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');

const connectDatabase = require("./configs/db.config");
const router = require("./routes/router");
dotenv.config();

const app = express();

connectDatabase();

const port = process.env.PORT || 3333;

// app.use(helmet({
//   // referrerPolicy: { policy: "no-referrer" },
//   contentSecurityPolicy: false,
// }));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    sum: (a, b) => a + b,
  }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

router(app);

app.listen(port, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err)
  console.log(`Server is listening on port: ${port}`)
});