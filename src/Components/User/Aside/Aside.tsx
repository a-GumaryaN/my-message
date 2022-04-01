import { FC } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import style from "./Aside.module.css";
import ProfileSetting from "./ProfileSetting/ProfileSetting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GetCode from "./GetCode/GetCode";

const Aside: FC<{}> = (props) => {
  const { id } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const { profileImage, fullName } = useSelector((state: any) => {
    return state.authentication;
  });

  const { secondary_bg, primary_text } = useSelector((state: any) => {
    return state.theme;
  });

  const asidePageSlice=useSelector((state:any)=>{
    return state.asidePageSlice;
  });


  const last_page = asidePageSlice[asidePageSlice.length - 1] || "not set";

  return (

    // aside container
    <div className={"col-12 col-md-4 col-lg-3 full-height " + style.container + ' ' + (id && style.hide)}>

      {(!asidePageSlice.length) && <Sidebar />}

      {last_page === 'profile setting' && <ProfileSetting />}

      {last_page === 'getting code' && <GetCode />}


    </div>
  );
};

export default Aside;
