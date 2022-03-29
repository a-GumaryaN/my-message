import style from "./Header.module.css";
import { FC } from "react";
import logo from "../../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Services from "./Services/Services";
import './Header.css';

const Header: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { text,border } = useSelector((state: any) => {
    return state.theme;
  });

  const { primary_bg,primary_text } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
      className={
        primary_bg+
        primary_text+
        "user-page-header col-12 d-flex flex-row align-items-center font-3 border-bottom border-2 position-relative " +
        style.header
      }
    >
      <img className={"ms-4 me-2 " + style.logo} src={logo} />
      my-message
      <Services/>
    </div>
  );
};

export default Header;
