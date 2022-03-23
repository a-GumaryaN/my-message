import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import User from "./Components/User/User";
import "./App.css";
import { useSelector } from "react-redux";
import Overlay from "./Components/Overlay/Overlay";
import AddProfileImage from "./Components/AddProfileImage/AddProfileImage";
import Modal from "./Components/Modal/Modal";
import GetCode from "./Components/GetCode/GetCode";
import CompleteInfo from "./Components/CompleteInfo/CompleteInfo";


function App() {
  const { scroll, scroll_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const { message } = useSelector((state: any) => {
    return state.modal;
  });

  return (
    <div className={scroll + scroll_bg + "App full-height "}>
      {message && < Modal />}
      <BrowserRouter>
        <Routes>
          <Route
            path=""
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

          <Route
            path="/get-code"
            element={
              <Overlay pageName="get code">
                <GetCode />
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
          
          <Route
            path="/complete-info"
            element={
              <Overlay pageName="complete information">
                <CompleteInfo />
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
