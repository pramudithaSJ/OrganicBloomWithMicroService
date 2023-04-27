const Cart = require("../models/Cart");

const updateCart = async (req, res) => {
  var cart = await Cart.findOne({ user_id: req.user._id });
  if (!cart) {
    Cart = new Cart({
      user_id: req.body.user_id,
      products: req.body.product_id,
      total_value: req.body.total_value
    });
  } else {
    cart.products = req.body.product_id;
    cart.total_value = req.body.total_value;
  }
  await cart.save();
  res.json(cart);
};

const getCart = async (req, res) => {
  try {
    var cart = await Cart.findOne({ user_id: req.user._id });
    // if the cart exist and if the cart has products, get the products rom the cart
    if (cart && cart.products.length > 0) {
      for (var index = 0; index < cart.products.length; index++) {
        try {
          // add all the product data
          cart.products[index].data = await Product.findById(
            cart.products[index].id
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
    return res.status(200).json(cart ? cart : {});
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "User cart not found" });
  }
};

module.exports =  updateCart, getCart ;
