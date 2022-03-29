import { useSelector } from "react-redux";
import style from "./Message.module.css";
import InputBar from "./InputBar/InputBar";
import Header from "./Header/Header";
import MessageBar from "./MessageBar/MessageBar";
import background_light from './light-back.jpeg';
import background_dark from './dark-back.jpg';
import { FC } from "react";
import mask from "../../../assets/img/mask.png";

const Message: FC<{}> = (props) => {
  const { name, id } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const { themeName, secondary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const background = (themeName === 'night' ? background_dark : background_light)

  return (
    <div

      style={{
        backgroundImage: `url(${mask}),url(${background})`
      }}

      className={
        style.container +
        " col-md-8 col-lg-9 col-12 full-height position-relative " +
        " border-3 border-start " +
        (!id && style.hide)
      }
    >

      <Header />

      <div style={{ height: "90%" }} className="col-12 col-md-10 d-flex flex-column align-items-center">
        <MessageBar />
        <InputBar />
      </div>

    </div>
  );
};

export default Message;
