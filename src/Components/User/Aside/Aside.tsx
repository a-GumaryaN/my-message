import { FC } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import style from "./Aside.module.css";

const Aside: FC<{}> = (props) => {
  const { id } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const { asidePages } = useSelector((state: any) => {
    return state.asidePage;
  });

  const last_page = asidePages[asidePages.length - 1] || null;

  return (

    // aside container
    <div className={"col-12 col-md-4 col-lg-3 full-height " + style.container + ' ' + (id && style.hide)}>

      {(!asidePages.length) && <Sidebar key={1} />}
      {last_page === 'profile setting' && <div className="col-12 full-height bg-danger">

      </div>}

    </div>
  );
};

export default Aside;
