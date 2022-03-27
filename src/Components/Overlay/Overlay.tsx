import { FC } from "react";
import { useSelector } from "react-redux";
import style from "./Overlay.module.css";

const Overlay: FC<{ pageName: string }> = ({ children, pageName }) => {
  const { bg } = useSelector((state: any) => {
    return state.theme;
  });
  return (
    <div
      className={
        bg +
        "col-12 container-fluid full-height " +
        "text-light d-flex flex-column " +
        " align-items-center"
      }
    >
      <div className="col-12 col-sm-8 col-md-6 col-xl-4 d-flex flex-column full-height">

        <div className={style.title}>{pageName}</div>

        <div className={style.content}>
          {children}

        </div>

      </div>
    </div>
  );
};

export default Overlay;
