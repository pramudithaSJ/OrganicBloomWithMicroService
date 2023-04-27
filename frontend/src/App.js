import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./sharedComponent/login";
import Sidebar from "./Admin/dashboard";
import SellerSidebar from "./seller/sellerDashboard";
import ViewProducts from "./userView/Products/ViewProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ViewProducts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Sidebar />} />
          <Route path="/Sellerdashboard" exact element={<SellerSidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
