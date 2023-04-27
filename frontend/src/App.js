import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./sharedComponent/login";
import Sidebar from "./Admin/dashboard";
import SellerSidebar from "./seller/sellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Sidebar />} />
        <Route path="/Sellerdashboard" exact element={<SellerSidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
