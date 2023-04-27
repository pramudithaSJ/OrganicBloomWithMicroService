import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Organic Bloom
          </a>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/session" className="hover:text-gray-400">
                  My Profile
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
