import { FC } from "react";
import { useSelector } from "react-redux";

const MessageCard: FC<{ sender: string; message: string; time: string }> = (
  props
) => {
  const from =
    props.sender === "me" ? " justify-content-end " : " justify-content-start ";

  const { text, border,text_import } = useSelector((state: any) => {
    return state.theme;
  });
  return (
    <div className={"col-12 text-light d-flex flex-row " + from}>
      <div className={border + text + " p-2 rounded border border-1 my-2 "}>
        <p className="text-warning">{props.sender}</p>
        <p>{props.message}</p>
        <p className={text_import}>{props.time}</p>
      </div>
    </div>
  );
};

export default MessageCard;
