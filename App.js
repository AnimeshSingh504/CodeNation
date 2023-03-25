import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {

  const [loggedIn, SetloggedIn] = useState(false);

  return (
  <div>
    <Navbar loggedIn={loggedIn} SetloggedIn={SetloggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login SetloggedIn={SetloggedIn}/>} />
      <Route path="/Signup" element={<Signup SetloggedIn={SetloggedIn}/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
  </div>
  );
}

export default App;
