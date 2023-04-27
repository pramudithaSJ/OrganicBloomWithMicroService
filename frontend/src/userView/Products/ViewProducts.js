import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { toast } from "react-toastify";

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsBanner, setSearchResultsBanner] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8050/")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        // if (products != undefined) {
        // //   console.log(products);
        // }
      })
      .catch((error) => console.error(error));
  }, []);

  const addToCart = (id) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(id);

    axios
      .post(
        "http://localhost:8060/",
        {
          user_id: "644a029720162eef2f26be5c",
          product_id: "644a9ffc51a70d44f72e47d6",
          total_value: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 201 || response.status === 200) {
          toast.success("Added to cart successfully");
        } else {
          toast.error("Error occured while adding to cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search(inputText);
  };
  const search = (text) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(text);
    axios
      .get(`http://localhost:8050/search/${text}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setSearchResults(response.data);
        } else {
          setSearchResultsBanner(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <Header />
      <section className="w-full">
        <div>
          <center>
            <h2 className="font-semibold text-3xl">Products</h2>
          </center>
          <br />
        </div>
        <div className="w-full flex justify-center items-center gap-10">
          <div className="w-1/2">
            <form onSubmit={handleSubmit}>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  value={inputText}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="bg-slate-400 p-5 hover:bg-black hover:text-white">
            <a href="/cart" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        {searchResults.length === 0 && searchResultsBanner ? (
          <div className="flex w-full text-center bg-red-500 p-3">
            <p className="text-center">No products found for "{inputText}"</p>
          </div>
        ) : null}
        <div className="grid grid-cols-4 gap-2 sm:w-full h-full overflow-auto p-10">
          {searchResults.length > 0
            ? searchResults.map((item) => (
                <div className=" mb-4 " key={item._id}>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                      <a href="#">
                        <img
                          class="rounded-t-lg h-52"
                          src={item.image}
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.productName}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                      <p class="mb-3 font-normal text-gray-100 dark:text-gray-400 text-lg">
                        Rs.{item.price}
                      </p>
                      <button
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => addToCart(item._id)}
                      >
                        Add To Cart
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : products.map((item) => (
                <div className=" mb-4 " key={item._id}>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                      <a href="#">
                        <img
                          class="rounded-t-lg h-52"
                          src={item.image}
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.productName}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                      <p class="mb-3 font-normal text-gray-100 dark:text-gray-400 text-lg">
                        Rs.{item.price}
                      </p>
                      <button
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => addToCart(item._id)}
                      >
                        Add To Cart
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* <div className="grid grid-cols-4 gap-2 sm:w-full h-full overflow-auto p-10">
          {searchResults.length > 0
            ? searchResults
            : products.map((item) => (
                <div className=" mb-4 " key={item._id}>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                      <a href="#">
                        <img
                          class="rounded-t-lg h-52"
                          src={item.image}
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.productName}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                      <p class="mb-3 font-normal text-gray-100 dark:text-gray-400 text-lg">
                        Rs.{item.price}
                      </p>
                      <button
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => addToCart(item._id)}
                      >
                        Add To Cart
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          {searchResults.length === 0 && <p>No products found</p>}
        </div> */}
      </section>
      <div className="row"></div>
      {/* <Footer/> */}
    </div>
  );
}

export default ViewProducts;
