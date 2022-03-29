import { FC } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import style from "./Aside.module.css";
import ProfileSetting from "./ProfileSetting/ProfileSetting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Aside: FC<{}> = (props) => {
  const { id } = useSelector((state: any) => {
    return state.selectedPerson;
  });


  const { profileImage, fullName } = useSelector((state: any) => {
    return state.authentication;
  });

  const { asidePages } = useSelector((state: any) => {
    return state.asidePage;
  });

  const { secondary_bg, primary_text } = useSelector((state: any) => {
    return state.theme;
  });

  const last_page = asidePages[asidePages.length - 1] || null;

  return (

    // aside container
    <div className={"col-12 col-md-4 col-lg-3 full-height " + style.container + ' ' + (id && style.hide)}>

      {(!asidePages.length) && <Sidebar />}

      {last_page === 'profile setting' && <ProfileSetting />}


    </div>
  );
};

export default Aside;
