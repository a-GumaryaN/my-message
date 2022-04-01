import { FC, FormEvent } from "react";
import AsideHeader from "../AsideHeader/AsideHeader";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const GetCode: FC<{}> = () => {

    const { primary_bg, primary_text } = useSelector((state: any) => { return state.theme });

    const [resendButton, setResendButton] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timer: any = count > 0 && setInterval(() => {
            setCount(count - 1);
        }, 1000);
        if (count === 0) setResendButton(false)
        return () => clearInterval(timer);
    }, [count]);

    const resendClickHandler=()=>{
        setCount(120);
        setResendButton(true);
    }

    return <div className={primary_bg + "col-12 full-height overflow-auto"}>

        <AsideHeader pageName="deleting account" />

        <form onSubmit={(e:FormEvent)=>{e.preventDefault()}} style={{ height: '90%' }} className="col-12 d-flex flex-column align-items-center justify-content-center">
            <p className={primary_text + 'font-2'}>
                we send a code to your email
            </p>
            <div className="col-7 my-2">
                <input placeholder="code" className="form-control" />
            </div>
            <p className="text-warning">
                send another code after : {Math.floor(count / 60)} :  {(count % 60)}
            </p>
            <div className="d-flex flex-row align-items-center justify-content-center">
                <button className="col-12 col-md-5 btn btn-primary btl-lg m-2">
                    check code
                </button>
                <button onClick={resendClickHandler} className={"col-12 col-md-5 btn btn-outline-success btl-lg m-2 " +
                    (resendButton && " disabled ")}>
                    resend code
                </button>
            </div>
        </form>
    </div>
}

export default GetCode;