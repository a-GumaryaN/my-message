import style from "./Card.module.css";
import { FC } from "react";

const Card: FC<{
  clickHandler: any;
  active: boolean;
  fullName: string;
  id: string;
}> = (props) => {
  const clickHandler = () => {
    props.clickHandler({ fullName: props.fullName, id: props.id });
  };
  return (
    <div
      onClick={clickHandler}
      className={
        "col-12 col-md-11 p-4 border border-3 " +
        " border-primary text-light rounded-3 my-1 " +
        (props.active && style.active) +
        " " +
        style.container
      }
    >
      {props.fullName}
    </div>
  );
};

export default Card;
