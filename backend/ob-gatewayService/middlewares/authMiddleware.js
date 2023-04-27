const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const product = require("../models/productModel");
const Token = require("../models/token");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  const secretKey = "mysecret";

  if (req.headers?.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[2];
    console.log("Token ===", token);
    try {
      if (token) {
        // const decoded = jwt.veify(token, secretKey);
        // console.log("decode", decoded);

        // Check if token exists in the database
        const tokenDoc = await Token.findOne({ token });

        if (!tokenDoc) {
          throw new Error(
            "Not Authorized. Token does not exist in the database."
          );
        }

        // Check if the token belongs to a valid user
        // const user = await product.findById(decoded?.id);
        if (!user) {
          throw new Error("Not Authorized. User does not exist.");
        }

        // req.user = user;
        next();
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
