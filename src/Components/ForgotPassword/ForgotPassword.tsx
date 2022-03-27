import useInput from "../../hooks/useInput/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { setTemp } from "../../store/temperature";

const ForgotPassword: React.FC<{}> = (props) => {
  const { state: email, dispatch: emailDispatch } = useInput();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const checkEmail = () => {
    if (!email.value) {
      emailDispatch({ type: "setError", error: "email in empty" });
      return true;
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
      emailDispatch({ type: "setError", error: "email not valid" });
      return true;
    }
    return false;
  };

  const submitHandler = (data: React.FormEvent) => {
    data.preventDefault();
  };

  const setCode = async () => {
    if (checkEmail()) return;

    const setCodeQuery = `
    mutation{
      setForgotEmailCode(email:"${email.value}"){
        error,
        result
      }
    }
    `;

    const serCodeResult = (await usefetch(setCodeQuery)).data;

    if (serCodeResult.setForgotEmailCode.error) {
      dispatch(setMessage({
        type: 'error',
        title: 'error',
        message: serCodeResult.setForgotEmailCode.error
      }));
      return;
    }

    dispatch(setMessage({
      type: 'success',
      title: 'message send',
      message: 'we send a code to your email'
    }));

    dispatch(setTemp({email:email.value,nextAction:'reset-password'}));

    navigate('../get-code', { replace: false });

  }

  return (
    <form onSubmit={submitHandler} className="col-12 col-sm-8 col-md-6 col-xl-4 d-flex flex-column">
      <div>
        <label className="display-6">enter your email</label>
        <input
          className="form-control"
          type="email"
          onChange={(e) => {
            emailDispatch({ type: "setValue", value: e.target.value });
          }}
          value={email.value}
          onBlur={checkEmail}
        />
        <p className="text-danger bg-gradient">{email.error}</p>
      </div>

      <div className="col-12 d-flex flex-row justify-content-between">
        <button onClick={() => { navigate('../login', { replace: false }) }} className="btn btn-outline-primary btn-lg align-self-end">
          back
        </button>
        <button onClick={setCode} className="btn btn-outline-primary btn-lg align-self-end">
          send code
        </button>

      </div>


      <Link className="link link-primary my-2 font-2" to="/get-email">
        not register?!
      </Link>
      <Link className="link link-primary my-2 font-2" to="/login">
        register later?!
      </Link>


    </form>
  );
};

export default ForgotPassword;
