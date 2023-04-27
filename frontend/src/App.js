import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./sharedComponent/login";
import Sidebar from "./Admin/dashboard";
import SellerSidebar from "./seller/sellerDashboard";
import Header from "./userView/Header/Header";
import ViewProducts from "./userView/Products/ViewProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/dashboard" exact element={<Sidebar/>} />
        <Route path="/Sellerdashboard" exact element={<SellerSidebar/>} />
        <Route path="/header" exact element={<Header/>} />
        <Route path="/products" exact element={<ViewProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
