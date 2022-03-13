import style from "./Header.module.css";
import { FC } from "react";
import logo from "../../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { setPage } from "../../../store/OffCanvas";

const Header: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const clickHandler=()=>{
    dispatch(setPage({page:"main"}));
  }

  return (
    <div
    onClick={clickHandler}
      className={
        "col-12 d-flex flex-row align-items-center text-light border-3 border-primary border-bottom font-3 " +
        style.header
      }
    >
      <img className={"ms-4 me-2 " + style.logo} src={logo} />
      my-message
    </div>
  );
};

export default Header;
