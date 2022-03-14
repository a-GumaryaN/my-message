import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Message from "./Message/Message";
import OffCanvas from "./OffCanvas/OffCanvas";
import { useState, FC } from "react";
import { useSelector } from "react-redux";

const User: FC<{}> = (props) => {
  const { text, border, bg } = useSelector((state: any) => {
    return state.theme;
  });
  return (
    <div className={bg + "col-12 full-height "}>
      <Header />
      <OffCanvas />
      <div className="col-12 d-flex flex-row " style={{ height: "90%" }}>
        <Aside />
        <Message />
      </div>
    </div>
  );
};

export default User;
