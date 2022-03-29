import style from "./OffCanvas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import MainPage from "./MainPage/MainPage";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../../store/OffCanvas";
import AppSetting from "./AppSetting/AppSetting";
import ThemeSetting from "./ThemeSetting/ThemeSetting";

const OffCanvas: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { page } = useSelector((state: any) => {
    return state.OffCanvas;
  });

  const { text, border, bg, text_import, btn } = useSelector((state: any) => {
    return state.theme;
  });

  const display = page === "hidden" ? "hidden" : "show";

  const headerClickHandler = () => {
    dispatch(setPage({ page: "hidden" }));
  };

  const pages = ["main page"];

  let Page = <MainPage />;

  if (page === "hidden") Page = <div></div>;

  if (page === "applicationSetting") Page = <AppSetting/>;

  if (page === "themeSetting") Page = <ThemeSetting/>;

  return (
    <div
      className={
        border +
        bg +
        "col-12 col-md-3 position-fixed border-3 " +
        " border-end " +
        style[display] +
        " " +
        style.container
      }
    >
      <div
        onClick={headerClickHandler}
        style={{ height: "10%" }}
        className={
          text +
          border +
          "col-12  font-3 p-3 border-3 border-bottom " +
          " d-flex flex-row align-items-center "
        }
      >
        <FontAwesomeIcon
          className={text_import + " display-6 ms-4 me-2 "}
          icon={faArrowCircleLeft}
        />
        {page}
      </div>

      <div className="col-12" style={{ height: "90%" }}>
        {Page}
      </div>
    </div>
  );
};

export default OffCanvas;
