import useInput from "../../hooks/useInput/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setMessage } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";
import usefetch from "../../hooks/useFetch/useFetch";
import React from "react";
import { setTemp } from "../../store/temperature";

const GetCodeForRegister: React.FC<{}> = (props) => {
  const { state: code, dispatch: codeDispatch } = useInput();
  const [button, setButton] = useState(true);
  const [count, setCount] = useState(2);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, nextAction } = useSelector((state: any) => {
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

    dispatch(setMessage({ title: "resend !", type: "success", message: "code resend again..." }));


    const setCodeQuery = `
    mutation{
      setVerifyCode(email:"${email}"){
        error,
        result
      }
    }
    `;

    const setCodeResult = (await usefetch(setCodeQuery)).data;

    if (setCodeResult.setVerifyCode.error) {
      dispatch(setMessage({
        type: 'error',
        title: 'error',
        message: setCodeResult.setVerifyCode.error
      }));
      return;
    }

    dispatch(setMessage({
      type: 'success',
      title: 'code resend',
      message: 'new code resend to your email again'
    }));

    setButton(true);

    setCount(120);
  }

  const goNext = async () => {
    if (checkCode()) return;

    const checkVerifyCodeQuery = `mutation{
      checkVerifyCode(email:"${email}",code:"${code.value}"){
        error,
        result
      }
    }`;

    const checkVerifyCodeResult = (await usefetch(checkVerifyCodeQuery)).data;

    if (checkVerifyCodeResult.checkVerifyCode.error) {
      dispatch(setMessage({
        title: "error",
        type: "error",
        message: checkVerifyCodeResult.checkVerifyCode.error
      }));
      return;
    }

    dispatch(setTemp({ email, code: code.value }));

    console.log(nextAction);

    navigate(('../' + nextAction), { replace: false });

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
      <p className="font-2">we send a code to your email !</p>
      <div>
        <label className="display-6">code :</label>
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
      <button onClick={resendCode} className={"col-12 my-2 col-md-5 col-lg-4 col-xl-3 " +
        " btn btn-outline-primary btn-lg " +
        (button && "disabled")}>
        resend
      </button>

      <p className="text-warning">send another code after {Math.floor(count / 60)} :  {(count % 60)}</p>

      <div className="col-12 d-flex flex-column flex-md-row justify-content-between">

        <button onClick={() => { navigate(-1) }} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg ">
          back
        </button>

        <button onClick={goNext} className="col-12 my-2 col-md-5 col-lg-4 col-xl-3  btn btn-outline-primary btn-lg ">
          go !
        </button>
      </div>


    </form >
  );
};

export default GetCodeForRegister;
