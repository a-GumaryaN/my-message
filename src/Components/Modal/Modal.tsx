import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.css";
import { setMessage } from "../../store/modal";
import styled from "styled-components";



const Modal = () => {

    const dispatch = useDispatch();

    const modalClickHandler = () => {
        dispatch(setMessage({ type: "", message: "" }));
    };

    const { type, message, title } = useSelector((state: any) => {
        return state.modal;
    });

    let textColor = " text-success ",
        btnType = " btn-outline-success ";

    if (type === "error") {
        textColor = " text-danger";
        btnType = " btn-outline-danger ";
    }
    if (type === "warning") {
        textColor = " text-warning";
        btnType = " btn-outline-warning ";
    }

//     const Modal = styled.div`
//     transition: all 0.7s ease-in-out;
//     background-color: rgba(255,255,255,0.5);
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
//     flex-direction: column;
// 	position: fixed;
// 	justify-content: center;
// 	align-items: center;
// 	z-index: 20;
// 	backdrop-filter: blur(5px);
// 	opacity: 0;
	
// 	visibility: hidden;

//     &.back-active{
//         visibility: visible;
//         opacity: 1;
//     }

//     `;


//     const Card = styled.div`
//     border-radius: 3rem;
// 	padding: 2rem;
// 	background-color: rgba(255,255,255,0.7);
// 	backdrop-filter: blur(5px);
// 	height: 30%;
// 	transition: all 0.3s ease-in-out;

//     @media only screen and (max-width:768px) {
//         &{
//             height: 100%;
//         }
//     }
//     `;

//     const CardHeader = styled.div`
//     height: 15%;
//     `;

//     const CardBody = styled.div`
//     height: 65%;
//     `;

//     const CardFooter = styled.button`
//     height: 20%;

//     @media only screen and (max-width:768px) {
//         &{
//             height: 10%;
//         }
//     }
//     `;

// const modal = <Modal className={(message && 'back-active')} >
//     <Card className={"col-12 col-md-6 2 d-flex flex-column "}>
//         <CardHeader className={"align-self-start font-4 " + textColor}>
//             {title}
//         </CardHeader>
//         <CardBody className={"row justify-content-center align-content-center font-3 " + textColor}>
//             {message}
//         </CardBody>
//         <CardFooter onClick={modalClickHandler} className={"col-6 col-md-5 col-lg-3 btn btn-lg align-self-end " + btnType}>
//             accept
//         </CardFooter>
//     </Card>
// </Modal>

const modal = (
    <div className={style["modal-back"] + ' ' + (message && style['back-active'])}>

        <div className={"col-12 col-md-6 2 d-flex flex-column " + style.card}>

            <div className={style['modal-header'] + " align-self-start font-4 " + textColor}>
                {title}
            </div>
            <div
                className={style['modal-body'] + " row justify-content-center align-content-center font-3 " + textColor}
            >
                {message}
            </div>
            <button
                onClick={modalClickHandler}
                className={style['modal-footer'] + " col-6 col-md-5 col-lg-3 btn btn-lg align-self-end " + btnType}
            >
                accept
            </button>
        </div>
    </div>
);

return createPortal(modal, document.getElementById("modal")!);
}

export default Modal;