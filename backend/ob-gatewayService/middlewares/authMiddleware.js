const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const product = require("../models/productModel");
const Token = require("../models/token");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  const secretKey = "mysecret";

  if (req.headers?.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split("Bearer ")[2];
    try {
      if (token) {
        const tokenDoc = await Token.findOne({ token });
        console.log("tokenDoc", tokenDoc);

        if (!tokenDoc) {
          console.log("not authorized");
          throw new ApiError(
            "Not Authorized. Token does not exist in the database."
          );
        }
        else{
          console.log("authorized");
          return next();
        }

      }
    } catch (error) {
      console.log(error);
      throw new Error("Not Authorized. Token expired, please login again.");
    }
  } else {
    throw new Error("Not Authorized. There is no token attached to header.");
  }
});

module.exports = authMiddleware;
