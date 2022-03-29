import { FC } from "react";
import { useSelector } from "react-redux";
import style from './Services.module.css';
import { useDispatch } from "react-redux";
import { setAsidePage } from "../../../../store/asidePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../../../store/theme";

const night_theme = {
    themeName: "night",
    border: ' border-dark ',
    primary_text: ' text-primary-dark ',
    secondary_text: ' text-secondary-dark ',
    primary_bg: ' bg-primary-dark ',
    shadow: " shadow-dark ",
    secondary_bg: ' bg-secondary-dark ',
}, light_theme = {
    themeName: "light",
    border: ' border-light ',
    shadow: " shadow-light ",
    primary_text: ' text-primary-light ',
    secondary_text: ' text-secondary-light ',
    primary_bg: ' bg-primary-light ',
    secondary_bg: ' bg-secondary-light ',
};

const Services: FC<{}> = () => {

    const { themeName, primary_bg, shadow, secondary_bg } = useSelector((state: any) => {
        return state.theme;
    });

    const dispatch = useDispatch();

    const changeTheme = () => {
        if (themeName === 'night')
            dispatch(setTheme(light_theme));
        else
            dispatch(setTheme(night_theme));
    }



    return <div className={style.container + (themeName === "night" ? secondary_bg : primary_bg) + "  user-page-header-menu height-auto col-10 col-md-3 position-absolute overflow-auto flex-column align-items-center p-2"}>
        <div onClick={() => { dispatch(setAsidePage({ newPage: '' })) }} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faUser} />
            profile setting
        </div>

        <div onClick={() => { dispatch(setAsidePage({ newPage: '' })) }} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faGear} />
            application setting
        </div>


        <div onClick={changeTheme} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start position-relative font-2 my-1"}>
            {(themeName === 'light') ? <FontAwesomeIcon className="mx-2 font-2" icon={faSun} /> : <FontAwesomeIcon className="mx-2 font-2" icon={faMoon} />}
            {(themeName === 'light') ? "night theme" : "light theme"}
        </div>

        <div onClick={() => { dispatch(setAsidePage({ newPage: '' })) }} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faGear} />
            application setting
        </div>

    </div>
}

export default Services;