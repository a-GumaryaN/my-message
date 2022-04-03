import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GetEmail from "./Components/GetEmail/GetEmail";
import User from "./Components/User/User";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./Components/Overlay/Overlay";
import AddProfileImage from "./Components/AddProfileImage/AddProfileImage";
import Modal from "./Components/Modal/Modal";
import GetCode from "./Components/GetCode/GetCode";
import FinalRegister from "./Components/FinalRegister/FinalRegister";


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
            path="/get-email"
            element={
              <Overlay pageName="enter your email">
                <GetEmail />
              </Overlay>
            }
          />
          
          <Route
            path="/get-code"
            element={
              <Overlay pageName="enter your code">
                <GetCode />
              </Overlay>
            }
          />


          <Route
            path="/final-register"
            element={
              <Overlay pageName="complete info">
                <FinalRegister />
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
