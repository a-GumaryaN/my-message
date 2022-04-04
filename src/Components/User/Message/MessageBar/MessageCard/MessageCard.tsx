import { FC } from "react";
import { useSelector } from "react-redux";
import style from "./MessageCard.module.css";

const MessageCard: FC<{ sender: string; message: string; time: string }> = (
  props
) => {
  const from =
    props.sender === "me" ? " justify-content-end " : " justify-content-start ";

  const { secondary_text, primary_text, primary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const cardTheme=(props.sender === 'me' ? style.me : style.other)

  return (
    <div className={"col-12 d-flex flex-row " + from}>
      <div className={primary_text + " my-2 "+cardTheme}>
        <p>{props.sender}</p>
        <p>{props.message}</p>
        <p className={secondary_text}>{props.time}</p>
      </div>
    </div>
  );
};

export default MessageCard;
