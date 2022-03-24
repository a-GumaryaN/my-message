import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Message from "./Message/Message";
import OffCanvas from "./OffCanvas/OffCanvas";
import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import { login } from "../../store/authentication";
import { useNavigate } from "react-router-dom";

const User: FC<{}> = (props) => {
  const { email } = useSelector((state: any) => {
    return state.authentication;
  });

  const navigate = useNavigate();

  // useEffect(async() => {
  //   const getPersonsQuery=``;
  //   const person=await usefetch(getPersonsQuery);
  // }, [email]);

  useEffect(() => {
    if (localStorage.getItem('my-message')) {
      const user = JSON.parse(localStorage.getItem('my-message')!);
      console.log(user)
      dispatch(login(user));
    } else {
      navigate('/login', { replace: true });
    }
  }, []);




  const dispatch = useDispatch();

  const { text, border, bg } = useSelector((state: any) => {
    return state.theme;
  });
  return (
    <div className={bg + "col-12 full-height "}>
      <Header />
      <OffCanvas />
      <div className="col-12 d-flex flex-row " style={{ height: "90%" }}>
        <Aside />
        <Message />
      </div>
    </div>
  );
};

export default User;
