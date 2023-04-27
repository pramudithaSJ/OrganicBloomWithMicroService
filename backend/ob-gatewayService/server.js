const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const authMiddleware = require("./middlewares/authMiddleware");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const URL =
  "mongodb+srv://itpproject2022:vMKyhwZ9nb2qt5Di@organicbloom.1zbkjaw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB connection successful !!!");
});
// Use the authentication middleware before proxying requests
app.use("/user", authMiddleware, proxy("http://localhost:8080"));
app.use("/product", authMiddleware, proxy("http://localhost:8050"));

app.listen(3030, () => {
  console.log("Gateway is running on port 3030");
});
