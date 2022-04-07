import style from "./Card.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";

const Card: FC<{
  clickHandler: any;
  active: boolean;
  fullName: string;
  id: string;
  profileImage: string;
}> = ({ active, profileImage, fullName, id, clickHandler }) => {
  const cardClickHandler = () => {
    clickHandler({ fullName, id, profileImage });
  };

  const { secondary_text, primary_bg, active_bg } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
      onClick={cardClickHandler}
      className={

        secondary_text +
        (active ? active_bg : primary_bg) +
        "col-12 col-md-11 p-1 " +
        " rounded-3 my-1 " +
        (active && style.active) +
        // (props.active && bg_active) +
        " " +
        style.container
      }
    >
      {/* {(profileImage && <img className={style.circle_image + " ms-2 me-4"} src={profileImage} />)} */}


      {/* {(profileImage && )} */}

      <div className={style['image-container'] + " position-relative"}>
        <img className={style.circle_image} src={profileImage} />
        <div className={style.dot}></div>
      </div>



      {fullName}
    </div>
  );
};
export default Card;
