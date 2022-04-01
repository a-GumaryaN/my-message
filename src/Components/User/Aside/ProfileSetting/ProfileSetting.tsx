import { FC } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import AsideHeader from "../AsideHeader/AsideHeader";
import mask from '../../../../assets/img/mask.png';
import style from "./ProfileSetting.module.css";
import { logout } from "../../../../store/authentication";
import { setAsidePage } from "../../../../store/asidePageSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileSetting: FC<{}> = (props) => {
    const { id } = useSelector((state: any) => {
        return state.selectedPerson;
    });

    const dispatch = useDispatch();

    const navigate=useNavigate();


    const { profileImage, fullName } = useSelector((state: any) => {
        return state.authentication;
    });

    const { secondary_bg, primary_text, primary_bg } = useSelector((state: any) => {
        return state.theme;
    });

    const loginOut=()=>{
        dispatch(setAsidePage('getting code'))
    }


    return <div className="col-12 full-height bg-danger overflow-auto">
        <AsideHeader pageName="profile setting" />


        <div style={{ backgroundImage: `url(${mask}),url(${profileImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '30%' }} className="col-12 bg-warning p-2 d-flex flex-row align-items-center justify-content-center position-relative">


            <div className="position-relative height-auto width-auto ">
                <img className="rounded-circle" style={{ width: '8rem', height: '8rem' }} src={profileImage} alt="profile image" />

                <FontAwesomeIcon style={{ right: '0rem', bottom: '0' }} className="position-absolute  p-3 text-info bg-light text-info rounded-circle" icon={faCamera} />
            </div>


            <div style={{ right: '1%', top: '2%' }} className={style.editButton}>
                <FontAwesomeIcon className=" p-3 text-info bg-light text-info rounded-circle " icon={faEdit} />
                <div className={primary_bg + primary_text + " col-auto position-absolute p-2 border-1  transition-02s " + style.editList}>
                    edit profile
                </div>
            </div>


            <p className={'font-3 text-light mx-2'}>{fullName}</p>
        </div>

        <div style={{ height: '62%' }} className="col-12 bg-warning d-flex flex-column align-items-center justify-content-start">

            <button onClick={loginOut} className={primary_bg + primary_text + "list-button col-12 py-3 border-bottom border-2"}>
                <FontAwesomeIcon className="mx-2" icon={faArrowAltCircleLeft} />
                logout
            </button>

        </div>
    </div>
};

export default ProfileSetting;
