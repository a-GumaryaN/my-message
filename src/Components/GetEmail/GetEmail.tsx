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

  }

  const next = async () => {

    if (checkEmail()) return;

    const GetEmailQuery = `
    mutation{
      GetEmail(email:"${email.value}"){
        error,
        result
      }
    }`;

    const GetEmail = (await usefetch(GetEmailQuery)).data.GetEmail;

    console.log(GetEmail);

    if (GetEmail.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: GetEmail.error
      }));
      return;
    }

    dispatch(setMessage({
      title: "check email",
      type: "success",
      message: "we send a code to your email"
    }));

    dispatch(setTemp({ email: email.value }));

    navigate('../get-code', { replace: false });

  };

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column">


      <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-between">

        <div className="col-12 col-md-8">

          <input
            className="form-control font-3"
            type="email"
            placeholder="email"
            onChange={(e) => {
              emailDispatch({ type: "setValue", value: e.target.value });
            }}
            value={email.value}
            onBlur={checkEmail}
          />
        </div>

        <button onClick={next} className="col-12 col-md-3 btn-1">
          next
        </button>

      </div>
      <p className="text-danger">{email.error}</p>


    </form>
  );
};

export default Register;
