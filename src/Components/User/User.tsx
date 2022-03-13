import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Message from "./Message/Message";
import OffCanvas from "./OffCanvas/OffCanvas";
import { useState, FC } from "react";

const User: FC<{}> = (props) => {
  return (
    <div className="col-12 full-height bg-dark">
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
