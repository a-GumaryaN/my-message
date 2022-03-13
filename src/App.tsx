import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Register from "./Components/Register/Register";
import "./App.css";

function App() {
  return (
    <div className="App full-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;