
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const morgan = require("morgan");

const WhereHouseSchema = require("./Models/WhereHouse")

app.use(cors());
const routes = require("./routes/routes");
app.use(bodyparser.json());
app.use(routes);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});
app.use(morgan("tiny"));
app.listen(12345, () => {
  console.log("Server is running on port 12345");
});
mongoose
  .connect("mongodb://127.0.0.1:27017/cointab",{
    autoCreate:true
  })
  .then(() => {
    console.log('Connected to database by the name of "cointab"');
  })
  .catch((error) => {
    console.log("Connection failed"), console.log(error);
  });

module.exports = app;
