import style from "./OffCanvas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import MainPage from "./MainPage/MainPage";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../../store/OffCanvas";

const OffCanvas: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { page } = useSelector((state: any) => {
    return state.OffCanvas;
  });

  const display = page === "hidden" ? "hidden" : "show";

  const headerClickHandler = () => {
    dispatch(setPage({ page: "hidden" }));
  };

  const pages = ["main page"];

  return (
    <div
      className={
        "col-12 col-md-3 bg-dark position-fixed border-3 border-secondary border-end " +
        style[display] +
        " " +
        style.container
      }
    >
      <div
        onClick={headerClickHandler}
        style={{ height: "10%" }}
        className={
          "col-12 text-light font-3 p-3 border-3 border-bottom border-secondary d-flex flex-row align-items-center "
        }
      >
        <FontAwesomeIcon
          className="text-light display-6 ms-4 me-2 "
          icon={faArrowCircleLeft}
        />
        {page}
      </div>

      <div className="col-12" style={{ height: "90%" }}>
        <MainPage />
      </div>
    </div>
  );
};

export default OffCanvas;
