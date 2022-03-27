import useInput from "../../hooks/useInput/useInput";
import { useNavigate, Link } from 'react-router-dom'
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { setTemp } from "../../store/temperature";
const ResetPassword: React.FC<{}> = (props) => {
  const { state: password, dispatch: passwordDispatch } = useInput();

  const {email , code }=useSelector((state:any)=>{return state.temperature});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = async (target: React.FormEvent) => {
    target.preventDefault();

    if (!checkPassword()) return;

    const ResetPasswordQuery = `
    mutation{
      resetPassword(email:"${email}",password:"${password.value}",code:"${code}"){
        error,
        result
      }
      }`;

    const {resetPassword} = (await usefetch(ResetPasswordQuery)).data;

    console.log(email+code)

    if (resetPassword.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: resetPassword.error
      }));
      return;
    }

    dispatch(setMessage({
      title: "reset!",
      type: "success",
      message: "your password reset"
    }));

    navigate('../login', { replace: true });

  };

  const checkPassword = (): boolean => {
    if (!password.value) {
      passwordDispatch({ type: "setError", error: "password is empty" });
      return false;
    }
    if (password.value.length < 1) {
      passwordDispatch({
        type: "setError",
        error: "password most be more than 8 characters",
      });
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column">
      <div>
        <label className="font-2">password</label>
        <input
          className="form-control"
          type="password"
          onChange={(e) => {
            passwordDispatch({ type: "setValue", value: e.target.value });
          }}
          value={password.value}
          onBlur={checkPassword}
        />
        <p className="text-danger bg-gradient">{password.error}</p>
      </div>
      <button className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg align-self-end">
        reset
      </button>
      <Link className="link link-primary my-2" to="/login">
        register later?!
      </Link>

    </form>
  );
};

export default ResetPassword;
