import { FC } from "react";
import { useSelector } from "react-redux";
import style from "./MainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import profile from "../../../../assets/img/profile.jpeg";
import { setPage } from "../../../../store/OffCanvas";
import MenuList from "./MenuList/MenuList";
const MainPage: FC<{}> = (props) => {
  const { fullName, email } = useSelector((state: any) => {
    return state.authentication;
  });

  return (
    <>
      <div
        className={
          "col-12 d-flex flex-row flex-wrap align-items-center justify-content-center text-light " +
          style["profile-card"]
        }
      >
        <img src={profile} className={" " + style["profile-image"]} />

        <p className="font-2 mx-2">fullName</p>
      </div>

      <MenuList />
    </>
  );
};

export default MainPage;
