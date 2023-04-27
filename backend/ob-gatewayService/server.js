const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

// Use the authentication middleware before proxying requests
app.use("/user", authMiddleware, proxy("http://localhost:8080"));
app.use("/product", proxy("http://localhost:8010"));

app.listen(3030, () => {
  console.log("Gateway is running on port 3030");
});
