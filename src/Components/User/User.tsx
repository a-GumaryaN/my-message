import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import { useState, FC } from "react";

const User: FC<{}> = (props) => {
  return (
    <div className="col-12 full-height bg-dark">
      <Header />
      <div className="col-12 d-flex flex-row " style={{ height: "90%" }}>
        <Aside />
      </div>
    </div>
  );
};

export default User;
