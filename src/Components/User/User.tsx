import Header from "./Header/Header";
import { useState, FC } from "react";

const User: FC<{}> = (props) => {
  return (
    <div className="col-12 full-height bg-dark">
      <Header />
    </div>
  );
};

export default User;
