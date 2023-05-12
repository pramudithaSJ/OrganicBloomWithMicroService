const router = require("express").Router();
const Cart = require("../controller/cartController");


router.get("/:userId", Cart.getCart);
router.post("/", Cart.updateCart);

module.exports = router;
