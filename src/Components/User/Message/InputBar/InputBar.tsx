import { FC, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFile,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import style from "./InputBar.module.css";
import Emojis from "./Emojis/Emojis";
import './EmojiStyle.css';
import useInput from "../../../../hooks/useInput/useInput";

const submitHandler = (data: FormEvent) => {
  data.preventDefault();
};
const InputBar: FC<{}> = () => {
  const { secondary_text, primary_text, primary_bg, secondary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const { state: input, dispatch: inputDispatch } = useInput();

  const [buttonDisplay, setButtonDisplay] = useState(true);

  const [emojiDisplay, setEmojiDisplay] = useState(false);

  return (
    <form
      onSubmit={submitHandler}
      style={{ height: "10%" }}
      className={
        primary_bg +
        " col-12 d-flex flex-row " +
        " p-2 align-items-center justify-content-evenly" +
        " bottom-0 star-0 position-relative rounded "
      }
    >

      <div id="emoji-button" className="col-1 full-height d-flex flex-column justify-content-evenly">
        <FontAwesomeIcon className="font-4" icon={faFaceSmile} />
        <Emojis />
      </div>

      <div className="col-7  mx-2">
        <input value={input.value} onChange={(e) => { inputDispatch({ type: 'setValue', value: e.target.value }) }} className={primary_text + " form-control text-dark p-1 "} />
      </div>

      <div
        className={
          "col-auto mx-2 d-flex emoji " +
          " flex-column align-items-center " +
          style["auto-hidden"]
        }
      >
        <FontAwesomeIcon className="emoji-button" icon={faFile} />
      </div>


    </form>
  );
};

export default InputBar;
