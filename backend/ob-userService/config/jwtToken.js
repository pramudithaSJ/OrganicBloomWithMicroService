const jwt = require("jsonwebtoken");


const generateToken = (id) => {
    console.log("id",id);
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}

module.exports = {generateToken};