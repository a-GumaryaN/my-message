import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import User from "./Components/User/User";
import "./App.css";
import { useSelector } from "react-redux";
import Overlay from "./Components/Overlay/Overlay";

function App() {
  const { scroll, scroll_bg } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div className={scroll + scroll_bg + "App full-height "}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Overlay pageName="Login">
                <LoginPage />
              </Overlay>
            }
          />
          <Route
            path="/login"
            element={
              <Overlay pageName="Login">
                <LoginPage />
              </Overlay>
            }
          />
          <Route
            path="/register"
            element={
              <Overlay pageName="Register">
                <Register />
              </Overlay>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Overlay pageName="forgot password">
                <ForgotPassword />
              </Overlay>
            }
          />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
