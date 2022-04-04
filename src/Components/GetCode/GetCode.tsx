import useInput from "../../hooks/useInput/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setMessage } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import React from "react";
import { setTemp } from "../../store/temperature";
import { login } from "../../store/authentication";

const GetCodeForReset: React.FC<{}> = (props) => {
  const { state: code, dispatch: codeDispatch } = useInput();
  const [button, setButton] = useState(true);
  const [count, setCount] = useState(2);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email } = useSelector((state: any) => {
    return state.temperature;
  });

  const checkCode = () => {
    if (!code.value) {
      codeDispatch({ type: "setError", error: "code is empty" });
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

  const submitHandler = (target: React.FormEvent) => {
    target.preventDefault();
  };

  const resendCode = async () => {

    const ReSendEmailQuery = `
    mutation{
      GetEmail(email:"${email}"){
        error,
        result
      }
    }`;

    const GetEmail = (await usefetch(ReSendEmailQuery)).data.GetEmail;

    if (GetEmail.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: GetEmail.error
      }));
      return;
    }

    dispatch(setMessage({
      type: 'success',
      title: 'code resend',
      message: GetEmail.result
    }));

    setButton(true);

    setCount(120);
  }

  const goNext = async () => {
    if (checkCode()) return;

    const CheckCode = `
    mutation{
      GetCode(email:"${email}",code:"${code.value}"){
        error,
        userExist,
        userLogin{
          token,
          user{
            fullName,
            profileImage
          }
        }
      }
    }`;

    const CheckCodeResult = (await usefetch(CheckCode)).data.GetCode;


    if (CheckCodeResult.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: CheckCodeResult.error
      }));
      return;
    }

    if (CheckCodeResult.userExist) {

      console.log("data => ");
      console.log(CheckCodeResult);

      const token = CheckCodeResult.userLogin.token,
      profileImage = CheckCodeResult.userLogin.user.profileImage,
        fullName = CheckCodeResult.userLogin.user.fullName;

      const user = { email, token, fullName,profileImage }

      localStorage.setItem('my-message', JSON.stringify(user));

      dispatch(login(user));

      dispatch(setMessage({ type: 'success', title: 'logged in', message: "logged in" }));

      navigate(('../'), { replace: true });

    } else {

      dispatch(setTemp({ email, code: code.value }));

      navigate(('../final-register'), { replace: true });

    }





  }

  useEffect(() => {
    const timer: any = count > 0 && setInterval(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) setButton(false)
    return () => clearInterval(timer);
  }, [count]);


  return (
    <form onSubmit={submitHandler} className="d-flex flex-column">

      <label className="display-6">code :</label>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

        <div className="col-12 col-md-8">

          <input
            className="form-control"
            type="password"
            onChange={(e) => {
              codeDispatch({ type: "setValue", value: e.target.value });
            }}
            value={code.value}
            onBlur={checkCode}
          />

        </div>

        <button onClick={resendCode} className={"col-12 col-md-3 btn-1 " +
          (button && "disabled")}>
          resend
        </button>

      </div>

      <p className="text-danger">{code.error}</p>

      <p className="text-warning">send another code after {Math.floor(count / 60)} :  {(count % 60)}</p>

      <div className="col-12 d-flex flex-column flex-md-row justify-content-between">

        <button onClick={() => { navigate(-1) }} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3 btn-1-left">
          back
        </button>

        <button onClick={goNext} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn-1-right ">
          go !
        </button>
      </div>

    </form >
  );
};

export default GetCodeForReset;
