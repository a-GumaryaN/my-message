import { FC, FormEvent } from "react";
import AsideHeader from "../../AsideHeader/AsideHeader";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setMessage } from "../../../../../store/modal";
import usefetch from "../../../../../hooks/useFetch/useFetch";
import useInput from "../../../../../hooks/useInput/useInput";
import { useNavigate } from "react-router-dom";

const DeleteAccount: FC<{}> = () => {

    const { primary_bg, primary_text } = useSelector((state: any) => { return state.theme });

    const { state: code, dispatch: codeDispatch } = useInput();

    const navigate = useNavigate();

    const [resendButton, setResendButton] = useState(true);

    const [count, setCount] = useState(0);

    const { email,token } = useSelector((state: any) => {
        return state.authentication;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const timer: any = count > 0 && setInterval(() => {
            setCount(count - 1);
        }, 1000);
        if (count === 0) setResendButton(false)
        return () => clearInterval(timer);
    }, [count]);

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

    const resendClickHandler = async () => {
        const GetEmailQuery = `
        mutation{
            GetEmail(email:"${email}"){
              error
            }
          }`;

        const GetEmail = (await usefetch(GetEmailQuery)).data.GetEmail;

        if (GetEmail.error) {
            dispatch(setMessage({
                title: "error",
                type: "error",
                message: GetEmail.error
            }));
            return;
        }

        dispatch(setMessage({
            title: "code send",
            type: "success",
            message: "code resend to your email"
        }));

        setCount(120);
        setResendButton(true);
    }


    const deleteAccount = async () => {
        const DeleteAccountQuery = `
        mutation{
            deleteAccount(code:"${code.value}"){
              error,
              result
            }
          }`;

        const deleteAccount = (await usefetch(DeleteAccountQuery,token)).data.deleteAccount;

        if (deleteAccount.error) {
            dispatch(setMessage({
                title: "error",
                type: "error",
                message: deleteAccount.error
            }));
            return;
        }

        dispatch(setMessage({
            title: "code send",
            type: "success",
            message: "your account delete , bye!"
        }));

        localStorage.removeItem('my-message');

        navigate('../get-email', { replace: true });

    }

    return <div className={primary_bg + "col-12 full-height overflow-auto"}>

        <AsideHeader pageName="deleting account" />

        <form onSubmit={(e: FormEvent) => { e.preventDefault() }} style={{ height: '90%' }} className="col-12 d-flex flex-column align-items-center justify-content-center">
            <p className={primary_text + 'font-2'}>
                we send a code to your email
            </p>
            <div className="col-7 my-2">
                <input
                    value={code.value}
                    onChange={(e) => {
                        codeDispatch({ type: "setValue", value: e.target.value });
                    }}
                    placeholder="code"
                    onBlur={checkCode}
                    className="form-control"
                />

            </div>
            <p className="text-danger">{code.error}</p>
            <p className="text-warning">
                send another code after : {Math.floor(count / 60)} :  {(count % 60)}
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                <button onClick={deleteAccount} className="col-12 col-md-5 btn-1 m-2">
                    delete account
                </button>
                <button onClick={resendClickHandler} className={"col-12 col-md-5 btn-1 m-2 " +
                    (resendButton && " disabled ")}>
                    resend code
                </button>
            </div>
        </form>
    </div>
}

export default DeleteAccount;