import useInput from "../../hooks/useInput/useInput";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { setMessage } from "../../store/modal";
import { useDispatch } from "react-redux";
import React from "react";
const GetCode: React.FC<{}> = (props) => {
  const { state: code, dispatch: codeDispatch } = useInput();
  const [button, setButton] = useState(true);
  const [count, setCount] = useState(3);

  const dispatch = useDispatch();

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

  const submitHandler = (data: React.FormEvent) => {
    data.preventDefault();
  };

  const resendCode = async () => {
    dispatch(setMessage({ title: "resended !", type: "warning", message: "code resended..." }));
    setCount(120);
  }

  const goNext = () => {
    if (checkCode()) return;
  }

  useEffect(() => {
    const timer: any = count > 0 && setInterval(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) setButton(false)
    return () => clearInterval(timer);
  }, [count]);


  return (
    <form onSubmit={submitHandler} className="col-12 col-sm-7 col-md-5 col-xl-4 d-flex flex-column">
      <p>we send a code to your email !</p>
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

      <p className="text-warning">send another code after {Math.floor(count / 60)} :  {(count % 60)}</p>

      <div className="col-12 d-flex flex-column flex-md-row justify-content-between">

        <button onClick={resendCode} className={"col-12 my-2 col-md-5 col-lg-3 " +
          " btn btn-outline-primary btn-lg " +
          (button && "disabled")}>
          resend
        </button>

        <button onClick={goNext} className="col-12 my-2 col-md-5 col-lg-3  btn btn-outline-primary btn-lg ">
          go !
        </button>
      </div>
    </form >
  );
};

export default GetCode;
