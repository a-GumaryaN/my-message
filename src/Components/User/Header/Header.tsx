import style from "./Header.module.css";
import { FC } from "react";
import logo from "../../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { setPage } from "../../../store/OffCanvas";
import { useSelector } from "react-redux";

const Header: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { text,border } = useSelector((state: any) => {
    return state.theme;
  });

  const clickHandler = () => {
    dispatch(setPage({ page: "main" }));
  };

  return (
    <div
      onClick={clickHandler}
      className={
        border+
        text+
        "col-12 d-flex flex-row align-items-center border-3 border-bottom font-3 " +
        style.header
      }
    >
      <img className={"ms-4 me-2 " + style.logo} src={logo} />
      my-message
    </div>
  );
};

export default Header;
