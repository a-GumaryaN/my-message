import { FC } from "react";
import { useSelector } from "react-redux";

const MessageCard: FC<{ sender: string; message: string; time: string }> = (
  props
) => {
  const from =
    props.sender === "me" ? " justify-content-end " : " justify-content-start ";

  const { secondary_text, primary_text, primary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div className={"col-12 d-flex flex-row " + from}>
      <div className={primary_text + primary_bg + " p-2 rounded my-2 "}>
        <p className="text-info">{props.sender}</p>
        <p>{props.message}</p>
        <p className={secondary_text}>{props.time}</p>
      </div>
    </div>
  );
};

export default MessageCard;
