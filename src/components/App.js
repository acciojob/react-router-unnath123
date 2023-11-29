
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import { Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate()
  return (
    <div>
      <navbar>
        <ul>
          <li onClick={()=>navigate("/")}>Home</li>
          <li onClick={()=>navigate("/About")}>About</li>
        </ul>
      </navbar>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
