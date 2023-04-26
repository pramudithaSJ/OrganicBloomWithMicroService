const jwt = require("jsonwebtoken");
const User = require("../models/usersModel")
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  const secretKey = "mysecret";
  if (req.headers?.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token", token);
    try {
      if (token) {
        const decoded = jwt.verify(token, secretKey);
        console.log("decode", decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      console.log(error);
      throw new Error("Not Authorized token expired , please login again");
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});

module.exports = authMiddleware;
