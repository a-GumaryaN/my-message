import useInput from "../../hooks/useInput/useInput";
import { login } from "../../store/authentication";
import { useDispatch, useSelector } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import React from "react";
import { setMessage } from "../../store/modal";
import { useNavigate, Link } from 'react-router-dom'

const LoginPage: React.FC<{}> = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { state: email, dispatch: emailDispatch } = useInput();
  const { state: password, dispatch: passwordDispatch } = useInput();

  const {primary_bg,primary_text,secondary_bg,secondary_text}=useSelector((state:any)=>{
    return state.theme;
  })

  const checkEmail = (): boolean => {
    if (!email.value) {
      emailDispatch({ type: "setError", error: "email is empty" });
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
      passwordDispatch({ type: "setError", error: "password is empty" });
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
            fullName,
            profileImage
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
        profileImage = data.login.user.profileImage,
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

      navigate('../', { replace: true });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} noValidate className={primary_bg+"col-12 d-flex flex-column justify-content-center"}>
      <div>
        <label className="font-2">email</label>
        <input
          className="form-control brd-5"
          type="email"
          onChange={(e) => {
            emailDispatch({ type: "setValue", value: e.target.value });
          }}
          value={email.value}
          onBlur={checkEmail}
        />
        <p className="text-danger">{email.error}</p>
      </div>
      <div>
        <label className="font-2">password</label>
        <input
          style={{border:'5rem'}}
          className="form-control brd-5"
          type="password"
          onChange={(e) => {
            passwordDispatch({ type: "setValue", value: e.target.value });
          }}
          value={password.value}
          onBlur={checkPassword}
        />
        <p className="text-danger">{password.error}</p>
      </div>
      <button className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg align-self-end">
        login
      </button>
      <Link className="link link-primary font-2 my-2" to="/forgot-password">
        forgot your password?!
      </Link>
      <Link className="link link-primary font-2" to="/get-email">
        not register?!
      </Link>


    </form>
  );
};

export default LoginPage;
