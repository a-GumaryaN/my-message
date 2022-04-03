import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import GetEmail from "./Components/GetEmail/GetEmail";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import User from "./Components/User/User";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./Components/Overlay/Overlay";
import AddProfileImage from "./Components/AddProfileImage/AddProfileImage";
import Modal from "./Components/Modal/Modal";
import GetCodeForRegister from "./Components/GetCodeForRegister/GetCodeForRegister";
import GetCodeForReset from "./Components/GetCodeForReset/GetCodeForReset";
import Register from "./Components/Register/Register";
import ResetPassword from "./Components/ResetPassword/ResetPassword";


function App() {

  const { themeType, primary_bg, secondary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  const { token } = useSelector((state: any) => {
    return state.theme;
  });

  const { message } = useSelector((state: any) => {
    return state.modal;
  });

  const scroll = (themeType === 'dark' ? ' dark-scroll ' : ' light-scroll ');

  return (
    <div className={primary_bg +scroll+ "App full-height d-flex flex-row justify-content-center "}>
      {/* {message && < Modal />} */}

      < Modal />

      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <User />
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
            path="/get-email"
            element={
              <Overlay pageName="enter your email">
                <GetEmail />
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

          <Route
            path="/Register"
            element={
              <Overlay pageName="complete information">
                <Register />
              </Overlay>
            }
          />

          <Route
            path="/add-profile-image"
            element={
              <Overlay pageName="profile image">
                <AddProfileImage />
              </Overlay>
            }
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
