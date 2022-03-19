import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput/useInput";
import { login } from "../../store/authentication";
import { useDispatch } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import React from "react";

const LoginPage: React.FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const checkEmail = (): boolean => {
    if (!email.value) {
      emailDispatch({ type: "setError", error: "email in empty" });
      return false;
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
      emailDispatch({ type: "setError", error: "email not valid" });
      return false;
    }
    return true;
  };

  const checkPassword = (): boolean => {
    if (!password.value) {
      passwordDispatch({ type: "setError", error: "password in empty" });
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

  const submitHandler = async (data: React.FormEvent) => {
    data.preventDefault();

    let isFormValid: boolean = true;

    isFormValid = isFormValid && checkEmail();
    isFormValid = isFormValid && checkPassword();

    if (!isFormValid) return;

    try {
      const query = `query{
        login(email:"${email.value}",password:"${password.value}"){
          error,
          user{
            _id,
            fullName
          },
          token
        }
      }`;

      const { data }: any =await usefetch(query);

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className="col-md-3 d-flex flex-column">
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
      <Link className="link link-primary" to="/forgot-password">
        forgot your password?!
      </Link>
      <Link className="link link-primary" to="/register">
        not register?!
      </Link>

      <button className="btn btn-outline-primary btn-lg align-self-end">
        login
      </button>
    </form>
  );
};

export default LoginPage;
