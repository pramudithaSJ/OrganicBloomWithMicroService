// const User = require("../models/usersModel")
// const jwt = require("jsonwebtoken")
// const asyncHandler = require("express-async-handler")

// const authMiddleware = asyncHandler(async(req,res,next) => {
//     let token;

//     if(req.headers?.authorization.startsWith("Bearer")){
//         token = req.headers.authorization.split(" ")[1];
//         console.log("Token",token)
//         try{
//             if(token){
//                 const decoded = jwt.verify(token, process.env.JWT_SECRET);
//                 console.log("decode",decoded)
//                 const user = await User.findById(decoded?.id);
//                 req.user = user;
//                 next();
//             }
//         }
//         catch(error){
//             console.log(error)
//             throw new Error("Not Authorized token expired , please login again")
//         }
//     }else{
//         throw new Error("There is no token attached to header")
//     }
// })



// module.exports = {authMiddleware}

const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:8010',
  changeOrigin: true,
  pathRewrite: {
    'http://localhost:3000/product/': ''
  }
};

const proxyMiddleware = createProxyMiddleware(options);

const jwt = require('jsonwebtoken');
const secret = 'your-secret-key'; // Replace with your own secret key

function authenticate(req, res, next) {
  // Check if token is provided
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Decode the token and check its validity
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Add the decoded token to the request object
    req.user = decoded;

    // If the token is valid, call the next middleware function
    next();
  });
}


module.exports = { proxyMiddleware, authenticate };

