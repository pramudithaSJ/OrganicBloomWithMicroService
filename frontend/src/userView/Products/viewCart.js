import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
};

function ViewCart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
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
        product_id: products._id,

        total_value: 0,
      });
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const placeOrder = async (value) => {
    try {
      await axios.post(`http://localhost:8060/create`, {
        order_status: "pending",
        user_id: userId,
        products: products,
        payment_value: cart?.total_value,
        payment_type: "card",
        payment_status: "pending",
        delivery_type: "pickup",
        delivery_address: "kottawa",
        delivery_status: "pending",
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

      <button
        className="bg-slate-800 text-white px-5 py-2 mt-20 mx-10 hover:bg-slate-700"
        onClick={() => setIsOpen(true)}
      >
        Place Order
      </button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="m-10">
          {" "}
          <Formik onSubmit={placeOrder}>
            {({ errors, touched }) => (
              <Form>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Delivery Address</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="text"
                      name=""
                    />
                  </div>
                </div>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Phone Number</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="number"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Delivery Type</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <select className="w-full px-10 border-2 ">
                      <option value="pickup">Pickup</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="flex">
                  <button
                    className="bg-red-600 text-white w-full py-2 mt-2 hover:bg-white hover:text-black border-2
                "
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-600 text-white w-full py-2 mt-2 hover:bg-white hover:text-black border-2
                "
                    type="submit"
                  >
                    Place Order
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
}

export default ViewCart;
