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
    return state.authentication;
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

  const submitHandler = async (target: React.FormEvent) => {
    target.preventDefault();
    let isFormValid = true;

    isFormValid = isFormValid && checkFullName();
    isFormValid = isFormValid && checkPassword();
    isFormValid = isFormValid && checkPasswordAgain();

    if (isFormValid) return;

    const RegisterQuery = `
    mutation{
      Register(email:"${email}",code:"${code}",fullName:"${fullName.value}",password:"${password.value}"){
        error,
        token
      }
    }`;

    const { data } = await usefetch(RegisterQuery);

    if (data.Register.error) {
      dispatch(setMessage({ title: 'error', type: "error", message: data.Register.error }));
      return;
    }

    const token = data.Register.token,
      user = {
        fullName: fullName.value,
        token,
        email,
        profileImage: ""
      }

    localStorage.setItem('my-message', JSON.stringify(user));

    dispatch(login(user));

    navigate('../add-profile-image', { replace: true });

  };

  return (
    <form onSubmit={submitHandler} className="col-12 col-sm-8 col-md-6 col-xl-4 d-flex flex-column">
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
      <Link className="link link-primary" to="/login">
        register later?!
      </Link>
      <button className="btn btn-outline-primary btn-lg align-self-end">
        next
      </button>
    </form>
  );
};

export default CompleteInfo;
