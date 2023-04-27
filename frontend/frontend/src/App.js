import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './User/Register';
import Login from './User/Login';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login/>} />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
