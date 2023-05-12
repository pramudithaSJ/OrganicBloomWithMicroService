import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { toast } from "react-toastify";

function ViewCart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetchCart();
  }, []);
  const fetchCart = async () => {
    try {
      const response = await axios
        .get(`http://localhost:8060/${userId}`)
        .then((response) => {
          console.log(response);
          setCart(response.data);
          setProducts(response.data.products);
        }); // Replace '123' with the actual user ID
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQuantity = async (productId) => {
    try {
      await axios.post("/api/cart", {
        user_id: "123", // Replace '123' with the actual user ID
        product_id: productId,
        total_value: 0,
      });
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete("/api/cart", {
        data: {
          user_id: "123", // Replace '123' with the actual user ID
          product_id: productId,
        },
      });
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-20">
      <h1>Cart</h1>
      {cart &&
        products &&
        products.map((product) => (
          <div
            key={product.product_id}
            className="flex items-center justify-between mb-4"
          >
            <div>
              <p>{product.name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Price: {product.price}</p>
            </div>
            <div>
              <button
                onClick={() => increaseQuantity(product.product_id)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Increase Quantity
              </button>
              <button
                onClick={() => deleteProduct(product.product_id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      <p>Total Amount: {cart?.total_value}</p>

      <button className="bg-slate-800 text-white px-5 py-2 mt-20 mx-10 hover:bg-slate-700">
        Place Order
      </button>
    </div>
  );
}

export default ViewCart;
