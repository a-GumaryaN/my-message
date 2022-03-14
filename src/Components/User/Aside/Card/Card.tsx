import style from "./Card.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";

const Card: FC<{
  clickHandler: any;
  active: boolean;
  fullName: string;
  id: string;
}> = (props) => {
  const clickHandler = () => {
    props.clickHandler({ fullName: props.fullName, id: props.id });
  };

  const { text, border,bg_active } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
      onClick={clickHandler}
      className={
        border+
        text+
        "col-12 col-md-11 p-4 border border-3 " +
        " rounded-3 my-1 " +
        (props.active && style.active) +
        (props.active && bg_active) +
        " " +
        style.container
      }
    >
      {props.fullName}
    </div>
  );
};

export default Card;
