import useInput from "../../hooks/useInput/useInput";
import { useNavigate, Link } from 'react-router-dom'
import usefetch from "../../hooks/useFetch/useFetch";
import { setMessage } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authentication";

import React from "react";
const CompleteInfo: React.FC<{}> = (props) => {
  const { state: fullName, dispatch: fullNameDispatch } = useInput();
  const { state: BDate, dispatch: BDateDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const { state: passwordAgain, dispatch: passwordAgainDispatch } = useInput();

  const { email, code } = useSelector((state: any) => {
    return state.temperature;
  });


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const checkFullName = () => {
    if (!fullName.value) {
      fullNameDispatch({ type: "setError", error: "full name is empty" });
      return true;
    }
    return false;
  };

  const checkPassword = () => {
    if (!password.value) {
      passwordDispatch({ type: "setError", error: "password is empty" });
      return true;
    }
    if (password.value.length < 2) {
      passwordDispatch({
        type: "setError",
        error: "password most be more than 6 characters",
      });
      return true;
    }
    return false;
  };

  const checkPasswordAgain = () => {
    if (!passwordAgain.value) {
      passwordAgainDispatch({
        type: "setError",
        error: "password again is empty",
      });
      return true;
    }
    if (passwordAgain.value !== password.value) {
      passwordAgainDispatch({
        type: "setError",
        error: "password again not match with password",
      });
      return true;
    }
    return false;
  };

  const register = async () => {
    let isFormValid = true;

    isFormValid = isFormValid && checkFullName();
    isFormValid = isFormValid && checkPassword();
    isFormValid = isFormValid && checkPasswordAgain();

    if (isFormValid) return;

    const RegisterQuery = `
    mutation{
      Register(email:"${email}",code:"${code}",password:"${password.value}",fullName:"${fullName.value}"){
        error,
        token
      }
      }`;

    const { Register } = (await usefetch(RegisterQuery)).data;
    
    if (Register.error) {
      dispatch(setMessage({ title: 'error', type: "error", message: Register.error }));
      return;
    }

    const token = Register.token,
      user = {
        fullName: fullName.value,
        token,
        email,
        profileImage: ""
      }

    localStorage.setItem('my-message', JSON.stringify(user));

    dispatch(login(user));

    navigate('../add-profile-image', { replace: true });
  }

  const submitHandler = async (target: React.FormEvent) => {
    target.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column">
      <div>
        <label className="display-6">full name</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            fullNameDispatch({ type: "setValue", value: e.target.value });
          }}
          value={fullName.value}
          onBlur={checkFullName}
        />
        <p className="text-danger bg-gradient">{fullName.error}</p>
      </div>
      <div>
        <label className="display-6">password</label>
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
      <div>
        <label className="display-6">password again</label>
        <input
          className="form-control"
          type="password"
          onChange={(e) => {
            passwordAgainDispatch({
              type: "setValue",
              value: e.target.value,
            });
          }}
          value={passwordAgain.value}
          onBlur={checkPasswordAgain}
        />
        <p className="text-danger bg-gradient">{passwordAgain.error}</p>
      </div>
      <div className="col-12 d-flex flex-column flex-md-row justify-content-between">

        <button onClick={() => { navigate(-1) }} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg ">
          back
        </button>

        <button onClick={register} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg ">
          register
        </button>
      </div>
      <Link className="link link-primary my-2" to="/login">
        register later?!
      </Link>

    </form>
  );
};

export default CompleteInfo;
