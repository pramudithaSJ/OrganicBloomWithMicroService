const router = require("express").Router();
const Cart = require("../controller/cartController");
const Order = require("../controller/orderController");

router.get("/:userId", Cart.getCart);
router.post("/", Cart.updateCart);
router.post("/create", Order.createOrder);
router.get("/order/:userId", Order.getOrdersByUserId);
module.exports = router;
