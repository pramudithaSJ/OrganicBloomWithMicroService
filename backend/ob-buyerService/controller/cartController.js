const Cart = require("../models/Cart");

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.body.user_id });
    if (!cart) {
      const newCart = new Cart({
        user_id: req.body.user_id,
        products: [{ product_id: req.body.product_id, quantity: 1 }],
        total_value: req.body.total_value,
      });
      await newCart.save();
      return res.status(201).json(newCart);
    } else {
      const productIndex = cart.products.findIndex(
        (product) => product.product_id == req.body.product_id
      );
      if (productIndex === -1) {
        cart.products.push({ product_id: req.body.product_id, quantity: 1 });
      } else {
        cart.products[productIndex].quantity += 1;
      }
      cart.total_value += req.body.total_value;
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
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

(module.exports = updateCart), getCart;
