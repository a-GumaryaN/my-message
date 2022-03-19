import style from "./Card.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import profile from "../../../../assets/img/profile.jpeg";

const Card: FC<{
  clickHandler: any;
  active: boolean;
  fullName: string;
  id: string;
}> = (props) => {
  const clickHandler = () => {
    props.clickHandler({ fullName: props.fullName, id: props.id });
  };

  const { text, border, bg_active } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
      onClick={clickHandler}
      className={
        border +
        text +
        "col-12 col-md-11 p-1 border border-3 " +
        " rounded-3 my-1 " +
        (props.active && style.active) +
        (props.active && bg_active) +
        " " +
        style.container
      }
    >
      <img className={style.circle_image + " ms-2 me-4"} src={profile} />
      {props.fullName}
    </div>
  );
};
export default Card;
