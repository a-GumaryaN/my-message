import { FC } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.css";
import { setMessage } from "../../store/modal";




const Modal = () => {

    const dispatch = useDispatch();

    const { text } = useSelector((state: any) => {
        return state.theme;
    });

    const modalClickHandler = () => {
        dispatch(setMessage({ type: "", message: "" }));
    };

    const { type, message, title } = useSelector((state: any) => {
        return state.modal;
    });

    let textColor = " text-danger",
        btnType = " btn-outline-danger ";

    if (type === "message") {
        textColor = " text-success";
        btnType = " btn-outline-success ";
    }
    if (type === "warning") {
        textColor = " text-warning";
        btnType = " btn-outline-warning ";
    }

    const modal = (
        <div className={style["modal-back"]}>
            <div className={"col-12 col-md-6 p-3 rounded-2 d-flex flex-column " + style.card}>
                <div className={"align-self-start font-4 " + textColor}>
                    {title}
                </div>
                <div
                    className={"row justify-content-center align-content-center font-2 " + textColor}
                >
                    {message}
                </div>
                <button
                    onClick={modalClickHandler}
                    className={"col-12 col-md-5 col-lg-3 btn btn-lg align-self-end " + btnType}
                >
                    accept
                </button>
            </div>
        </div>
    );

    return createPortal(modal, document.getElementById("modal")!);
}

export default Modal;