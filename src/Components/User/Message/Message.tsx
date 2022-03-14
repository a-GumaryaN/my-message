import { useSelector } from "react-redux";
import style from "./Message.module.css";
import InputBar from "./InputBar/InputBar";
import Header from "./Header/Header";
import MessageBar from "./MessageBar/MessageBar";
import { FC } from "react";

const Message: FC<{}> = (props) => {
  const { name, id } = useSelector((state:any) => {
    return state.selectedPerson;
  });

  const { text,border } = useSelector((state: any) => {
    return state.theme;
  });

  return (
    <div
      className={
        border+
        "col-md-9 col-12 full-height position-relative " +
        " border-3 border-start " +
        (!id && style.hide)
      }
    >
      <Header />
      <MessageBar />
      <InputBar />
    </div>
  );
};

export default Message;
