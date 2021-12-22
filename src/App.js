import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/Signup";
import LogIn from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import Requests from "./pages/Requests/Requests";

// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Order />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
