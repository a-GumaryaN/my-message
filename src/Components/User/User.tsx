import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Message from "./Message/Message";
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

  return (
    <div style={{maxWidth:"1400px",boxShadow:'0 0 2.5rem rgb(47, 90, 126)'}} className={"col-12 full-height border-start border-end border-3"}>
      <Header />
      <div className="col-12 d-flex flex-row " style={{ height: "90%" }}>
        <Aside />
        <Message />
      </div>
    </div>
  );
};

export default User;
