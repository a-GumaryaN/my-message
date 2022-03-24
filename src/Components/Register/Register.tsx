import useInput from "../../hooks/useInput/useInput";
import { useNavigate, Link } from 'react-router-dom'
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { useDispatch } from "react-redux";
import { login } from "../../store/authentication";

import React from "react";
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

    dispatch(login({ email: email.value }));

    navigate('../get-code', { replace: false });

  };

  return (
    <form onSubmit={submitHandler} className="col-12 col-sm-8 col-md-6 col-xl-4 d-flex flex-column">
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
      <Link className="link link-primary" to="/login">
        register later?!
      </Link>
      <button className="btn btn-outline-primary btn-lg align-self-end">
        next
      </button>
    </form>
  );
};

export default Register;
