import useInput from "../../hooks/useInput/useInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
const ForgotPassword: React.FC<{}> = (props) => {
  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: code, dispatch: codeDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();
  const [codeInput, showCodeInput] = useState(false);
  const [passwordInput, showPasswordInput] = useState(false);
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

  const checkCode = () => {
    if (!codeInput) return true;
    if (!code.value) {
      codeDispatch({ type: "setError", error: "password in empty" });
      return true;
    }
    if (code.value.length < 6) {
      codeDispatch({
        type: "setError",
        error: "code most be more than 6 characters",
      });
      return true;
    }
    return false;
  };

  const checkPassword = () => {
    if (!passwordInput) return;
    if (!password.value) {
      passwordDispatch({ type: "setError", error: "password in empty" });
      return false;
    }
    if (password.value.length < 8) {
      passwordDispatch({
        type: "setError",
        error: "password most be more than 8 characters",
      });
      return false;
    }
    return true;
  };

  const submitHandler = (data: React.FormEvent) => {
    data.preventDefault();

    if (checkEmail()) return;

    showCodeInput(true);

    if (checkCode()) return;

    showPasswordInput(true);

    if (checkPassword()) return;
  };

  return (
    <form onSubmit={submitHandler} className="col-md-3 d-flex flex-column">
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
      <div className={"collapse " + (codeInput && " show ")}>
        <p className="text-warning">we send a code to your email</p>
        <p className="text-warning">send a new code after </p>
        <label className="display-6">code</label>
        <input
          className="form-control"
          type="password"
          onChange={(e) => {
            codeDispatch({ type: "setValue", value: e.target.value });
          }}
          value={code.value}
          onBlur={checkCode}
        />
        <p className="text-danger bg-gradient">{code.error}</p>
      </div>
      <div className={"collapse " + (passwordInput && " show ")}>
        <p className="text-warning">enter new password</p>
        <label className="display-6">new password</label>
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
      <Link className="link link-primary" to="/register">
        not register?!
      </Link>
      <Link className="link link-primary" to="/login">
        register later?!
      </Link>
      <button className="btn btn-outline-primary btn-lg align-self-end">
        {passwordInput ? "change password" : "send code"}
      </button>
    </form>
  );
};

export default ForgotPassword;
