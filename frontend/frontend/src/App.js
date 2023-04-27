import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './User/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
