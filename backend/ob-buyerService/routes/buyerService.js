const router = require("express").Router();
const updateCart = require("../controller/cartController");
const getCart = require("../controller/cartController");

router.get("/:userId", getCart);
router.post("/", updateCart);

module.exports = router;
