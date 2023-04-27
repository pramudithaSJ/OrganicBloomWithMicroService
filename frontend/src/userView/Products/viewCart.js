import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { toast } from "react-toastify";

function ViewCart() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    axios
      .get(
        "http://localhost:8060/644a029720162eef2f26be5c",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success("Cart Items Loaded Successfully");})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>viewCart</div>;
}

export default ViewCart;
