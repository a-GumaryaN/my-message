import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Message from "./Message/Message";
import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import { login } from "../../store/authentication";
import { useNavigate } from "react-router-dom";
import load from "../../assets/img/load.gif";
import Loading from "../Loading/Loading";

const User: FC<{}> = (props) => {
  const { email } = useSelector((state: any) => {
    return state.authentication;
  });

  const [socket, setSocket] = useState(null);

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
      navigate('/get-email', { replace: true });
    }





  }, []);

  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: "1400px", boxShadow: '0 0 3rem rgb(47, 90, 126)' }} className={"col-12 full-height border-start border-end border-3"}>
      {(socket
        ?
        <div className="col-12 full-height">
          <Header />
          <div className="col-12 d-flex flex-row " style={{ height: "90%" }}>
            <Aside />
            <Message />
          </div>
        </div>
        :
        <div className="col-12 full-height d-flex flex-column align-items-center justify-content-center text-light">
         <Loading/>
        </div>
      )}
    </div>
  );
};

export default User;
