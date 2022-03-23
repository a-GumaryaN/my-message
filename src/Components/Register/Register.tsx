import useInput from "../../hooks/useInput/useInput";
import { useNavigate, Link } from 'react-router-dom'
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { useDispatch } from "react-redux";
import { setVerifyInfo } from "../../store/verify_hash";

import React from "react";
const Register: React.FC<{}> = (props) => {
  const { state: fullName, dispatch: fullNameDispatch } = useInput();
  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const { state: passwordAgain, dispatch: passwordAgainDispatch } = useInput();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      Register_1(email:"${email.value}"){
        error,
        verify_hash
      }
    }`;

    const { data } = await usefetch(RegisterQuery);


    if (data.Register_1.error) {
      dispatch(setMessage({ title: 'error', type: "error", message: data.Register_1.error }));
      return;
    }

    const verify_hash = data.Register_1.verify_hash;

    dispatch(setVerifyInfo({ verify_hash, email: email.value, code: "" }));

    alert("verify_hash saved...");

    dispatch(setMessage({
      title: "check email",
      type: "success",
      message: "we send a code to your email"
    }));

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
