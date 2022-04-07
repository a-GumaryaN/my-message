import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from './Services.module.css';
import { useDispatch } from "react-redux";
import { setAsidePage, resetAside } from "../../../../store/asidePageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../../../store/theme";

const night_theme = {
    themeName: "night",
    themeType: 'dark',
    border: ' border-dark ',
    primary_text: ' text-primary-dark ',
    secondary_text: ' text-secondary-dark ',
    primary_bg: ' bg-primary-dark ',
    shadow: " shadow-dark ",
    secondary_bg: ' bg-secondary-dark ',
    active_bg: ' bg-active-dark ',
}, light_theme = {
    themeName: "light",
    themeType: 'light',
    border: ' border-light ',
    shadow: " shadow-light ",
    primary_text: ' text-primary-light ',
    secondary_text: ' text-secondary-light ',
    primary_bg: ' bg-primary-light ',
    secondary_bg: ' bg-secondary-light ',
    active_bg: ' bg-active-light ',
};

const Services: FC<{}> = () => {

    const { themeType, themeName, primary_bg, shadow, secondary_bg } = useSelector((state: any) => {
        return state.theme;
    });

    const dispatch = useDispatch();

    const changeTheme = () => {
        if (themeName === 'night')
            dispatch(setTheme(light_theme));
        else
            dispatch(setTheme(night_theme));
    }


    const goToProfileSetting = () => {
        dispatch(resetAside());
        dispatch(setAsidePage('profile setting'));
    };

    const goToAppSetting = () => {
        dispatch(resetAside());
        dispatch(setAsidePage('application setting'));
    };

    return <div className={style.container + (themeType === "dark" ? secondary_bg : primary_bg) + " col-8 col-sm-5 col-md-3 user-page-header-menu height-auto position-absolute overflow-auto d-flex flex-column align-items-center justify-content-center p-2"}>


        <div onClick={goToProfileSetting} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faUser} />
            profile setting
        </div>

        <div onClick={goToAppSetting} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faGear} />
            application setting
        </div>


        <div onClick={changeTheme} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start position-relative font-2 my-1"}>
            {(themeType === 'light') ?
                <FontAwesomeIcon className="mx-2 font-2 text-primary" icon={faMoon} />
                : <FontAwesomeIcon className="mx-2 font-2 text-warning" icon={faSun} />}
            {(themeType === 'light') ? 'night' : 'light'}
        </div>

        <div onClick={() => { dispatch(setAsidePage({ newPage: '' })) }} className={style.item + primary_bg + shadow + " col-11 p-2  d-flex flex-row align-items-center justify-content-start font-2 my-1"}>
            <FontAwesomeIcon className="mx-2 font-2" icon={faGear} />
            application setting
        </div>

    </div>
}

export default Services;