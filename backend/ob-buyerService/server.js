const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

//database link
const URL =
  "mongodb+srv://itpproject2022:vMKyhwZ9nb2qt5Di@organicbloom.1zbkjaw.mongodb.net/?retryWrites=true&w=majority";
const PORT = 8060;

//create mongo configurations
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB connection successful !!!");
});
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});

const productRoute = require("./routes/buyerService");
app.use("/", productRoute);
