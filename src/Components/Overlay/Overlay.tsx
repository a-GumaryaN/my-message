import { FC } from "react";
import { useSelector } from "react-redux";
import style from "./Overlay.module.css";
import overlayBg from "../../assets/img/overlay-bg.jpg";

const Overlay: FC<{ pageName: string }> = ({ children, pageName }) => {

  const { secondary_text, primary_text, primary_bg, secondary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
    style={{backgroundImage:`url(${overlayBg})`}}
      className={
        primary_bg+
        "col-12 container-fluid full-height " +
        "text-light d-flex flex-column " +
        " align-items-center"
      }
    >
      <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 d-flex flex-column justify-content-center full-height">

        <div className={style.title+primary_text+"d-flex flex-row justify-content-center"}>{pageName}</div>

        <div className={style.content}>
          {children}
        </div>

      </div>
    </div>
  );
};

export default Overlay;
