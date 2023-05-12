import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./sharedComponent/login";
import Sidebar from "./Admin/dashboard";
import SellerSidebar from "./seller/sellerDashboard";
import ViewProducts from "./userView/Products/ViewProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewCart from "./userView/Products/viewCart";
import Register from "./sharedComponent/register";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ViewProducts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Sidebar />} />
          <Route path="/Sellerdashboard" exact element={<SellerSidebar />} />
          <Route path="/cart" exact element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
