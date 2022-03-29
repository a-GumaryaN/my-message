import MessageCard from "./MessageCard/MessageCard";
import { FC } from "react";
const MessageBar: FC<{}> = (props) => {
  return (
    <div style={{
      height: "90%",
      overflow: "auto"
    }} className="col-12 p-4">
      <MessageCard sender="me" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="me" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="my friend" message="message..." time="8:20" />
      <MessageCard sender="me" message="message..." time="8:20" />
    </div>
  );
};

export default MessageBar;
