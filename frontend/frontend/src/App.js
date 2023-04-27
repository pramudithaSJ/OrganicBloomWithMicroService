import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './User/Register';
import Login from './User/Login';
import SideNav from './Admin/SideNav';
import SellerSideNav from './Seller/SellerSideNav';
import ProductView from './Seller/ProductView';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/adminnav" exact element={<SideNav/>} />
          <Route path="/sellernav" exact element={<SellerSideNav/>} />
          <Route path="/viewproducts" exact element={<ProductView/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
