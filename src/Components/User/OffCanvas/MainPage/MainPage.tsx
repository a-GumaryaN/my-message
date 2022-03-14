import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./MainPage.module.css";
import profile from "../../../../assets/img/profile.jpeg";
import { setPage } from "../../../../store/OffCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser, faBrush } from "@fortawesome/free-solid-svg-icons";

const MainPage: FC<{}> = (props) => {
  const { fullName, email } = useSelector((state: any) => {
    return state.authentication;
  });

  const { text, border, btn } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  const pages = [
    {
      name: "application setting",
      icon: faCog,
      clickHandler: () => {
        dispatch(setPage({ page: "applicationSetting" }));
      },
    },
    {
      name: "profile setting",
      icon: faUser,
      clickHandler: () => {
        dispatch(setPage({ page: "profileSetting" }));
      },
    },
    {
      name: "theme setting",
      icon: faBrush,
      clickHandler: () => {
        dispatch(setPage({ page: "themeSetting" }));
      },
    },
  ];

  return (
    <>
      <div
        className={
          "col-12 d-flex flex-row flex-wrap align-items-center " +
          " justify-content-center text-light " +
          style["profile-card"]
        }
      >
        <img src={profile} className={" " + style["profile-image"]} />

        <p className="font-2 mx-2">fullName</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        {pages.map((item) => {
          return (
            <button
              key={item.name}
              onClick={item.clickHandler}
              className={"col-11 my-1 btn btn-lg p-3 font-2 " + btn}
            >
              <FontAwesomeIcon className="px-2" icon={item.icon} />
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
