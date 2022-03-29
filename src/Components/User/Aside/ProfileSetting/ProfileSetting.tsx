import { FC } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AsideHeader from "../AsideHeader/AsideHeader";
import mask from '../../../../assets/img/mask.png';

const ProfileSetting: FC<{}> = (props) => {
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

    return <div className="col-12 full-height bg-danger">
        <AsideHeader pageName="profile setting"/>
        <div style={{ backgroundImage: `url(${mask}),url(${profileImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="col-12 bg-warning p-2 d-flex flex-row align-items-center justify-content-center">
            <img style={{ width: '50%', height: 'auto', borderRadius: '50%' }} src={profileImage} alt="profile image" />
            <p className={'font-3 text-light mx-2'}>{fullName}</p>
        </div>
    </div>
};

export default ProfileSetting;
