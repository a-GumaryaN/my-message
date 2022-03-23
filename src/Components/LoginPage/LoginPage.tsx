import useInput from "../../hooks/useInput/useInput";
import { login } from "../../store/authentication";
import { useDispatch } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import React from "react";
import { setMessage } from "../../store/modal";
import  { useNavigate,Link } from 'react-router-dom'

const LoginPage: React.FC<{}> = (props) => {
  const dispatch = useDispatch();

  const navigate=useNavigate();

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

      const { data }: any = await usefetch(query);

      if (data.login.error) {
        dispatch(setMessage({
          title: "error",
          type: "error",
          message: data.login.error
        }));

      }

      const token = data.login.token,
        fullName = data.login.user.fullName,
        profileImage = data.login.user.profileImage || null,
        user = {
          fullName,
          token,
          email: email.value,
          profileImage
        }

      localStorage.setItem('my-message', JSON.stringify(user));

      dispatch(setMessage({
        title: "success",
        type: "success",
        message: "logged in successfully"
      }));

      dispatch(login(user));

      navigate('../user',{replace:true});

    } catch (error) {
      console.log(error);
    }
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
