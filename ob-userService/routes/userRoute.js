const router = require("express").Router();

const {
    createUser,
    loginUserCtrl,
    handleRefreshToken,
    logout
   
} = require("../controller/userCtrl");


router.post("/register",createUser)
router.post("/logins", loginUserCtrl)
router.get("/refresh",handleRefreshToken)
router.get("/logout",logout)


module.exports = router;