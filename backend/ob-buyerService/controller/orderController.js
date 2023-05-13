const order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    let newOrder = new order({
      order_status: req.body.order_status,
      user_id: req.body.user_id,
      products: req.body.products,
      payment_value: req.body.payment_value,
      payment_type: req.body.payment_type,
      payment_status: req.body.payment_status,
      delivery_type: req.body.delivery_type,
      delivery_address: req.body.delivery_address,
      delivery_status: req.body.delivery_status,
    });
    let savedOrder = await newOrder.save();
    if (savedOrder) {
      return res
        .status(200)
        .json({ message: "Order created", errorMessage: "null" });
    } else {
      return res.status(400).json({ message: "Error creating order" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error creating order" });
  }
};
const getOrderDetails = async (req, res) => {
  try {
    let orderDetails = await order.findById(req.params.id);
    if (orderDetails) {
      return res.status(200).json(orderDetails);
    } else {
      return res.status(400).json({ message: "Order not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Order not found" });
  }
};
const getOrdersByUserId = async (req, res) => {
  try {
    let orders = await order.find({ user_id: req.params.userId });
    if (orders.length > 0) {
      return res.status(200).json(orders);
    } else {
      return res.status(400).json({ message: "No orders found for the user" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error retrieving orders" });
  }
};
module.exports = { createOrder, getOrderDetails, getOrdersByUserId };
