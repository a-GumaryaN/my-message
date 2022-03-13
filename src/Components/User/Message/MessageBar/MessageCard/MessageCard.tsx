import { FC } from "react";
const MessageCard: FC<{ sender: string; message: string; time: string }> = (
  props
) => {

  const from = props.sender==="me"?" justify-content-end ":" justify-content-start "
  return (
    <div className={"col-12 text-light d-flex flex-row "+from}>
      <div className="tex-light p-2 rounded border border-1 my-2 border-primary">
        <p className="text-warning">{props.sender}</p>
        <p>{props.message}</p>
        <p className="text-purple">{props.time}</p>
      </div>
    </div>
  );
};

export default MessageCard;
