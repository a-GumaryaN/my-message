import useInput from "../../hooks/useInput/useInput";
import { useNavigate, Link } from 'react-router-dom'
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { useDispatch } from "react-redux";

import React from "react";
import { setTemp } from "../../store/temperature";
const Register: React.FC<{}> = (props) => {
  const { state: email, dispatch: emailDispatch } = useInput();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const checkEmail = () => {
    if (!email.value) {
      emailDispatch({ type: "setError", error: "email is empty" });
      return true;
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
      emailDispatch({ type: "setError", error: "email not valid" });
      return true;
    }
    return false;
  };

  const submitHandler = async (target: React.FormEvent) => {
    target.preventDefault();

    if (checkEmail()) return;

    const RegisterQuery = `
    mutation{
      setVerifyCode(email:"${email.value}"){
        error
      }
    }`;

    const { data } = await usefetch(RegisterQuery);

    if (data.setVerifyCode.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: data.setVerifyCode.error
      }));
      return;
    }

    dispatch(setMessage({
      title: "check email",
      type: "success",
      message: "we send a code to your email"
    }));

    dispatch(setTemp({ email: email.value, nextAction: "Register" }));

    navigate('../get-code-for-register', { replace: false });

  };

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column">
      <div>
        <label className="display-6">email</label>
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
      <button className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg align-self-end">
        next
      </button>
      <Link className="link link-primary my-2" to="/login">
        register later?!
      </Link>

    </form>
  );
};

export default Register;
