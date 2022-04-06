import { FC, FormEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFile,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState,useMemo } from "react";
import style from "./InputBar.module.css";
import Emoji from "./Emoji/Emoji";
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

  const [recorderState, setRecorderState] = useState(false);

  const [timeRecord, setTimeRecord] = useState(0);

  const record = () => {
    if (!recorderState) {
      setRecorderState(true);


    } else {
      setRecorderState(false);
    }
    console.log(recorderState)
  }

  const emojiClickHandler = (inputEmoji: any) => {
    inputDispatch({ type: 'setValue', value: input.value + inputEmoji })
  }

  return (
    <div style={{ height: "10%" }} className='col-12 d-flex flex-column align-items-center justify-content-center'>
      <form
        onSubmit={submitHandler}
        style={{ height: "80%", borderRadius: '1rem' }}
        className={
          primary_bg +
          " col-12 col-md-11 d-flex flex-row " +
          " align-items-center justify-content-center" +
          " bottom-0 star-0 position-relative "
        }
      >
        <div className={style.emojiButton + " emoji-button height-auto full-height d-flex flex-column justify-content-evenly"}>
          <FontAwesomeIcon className={primary_text + " font-4 transition-02s"} icon={faFaceSmile} />
          <Emoji emojiClickHandler={emojiClickHandler} />
        </div>

        <div className="col-7  mx-2">
          <input value={input.value} onChange={(e) => { inputDispatch({ type: 'setValue', value: e.target.value }) }} className={primary_text + " form-control text-dark p-1 "} />
        </div>


        <div onClick={record} className={style.micButton + " col-1 full-height d-flex flex-column justify-content-evenly position-relative"}>
          <FontAwesomeIcon className={primary_text + " font-4 transition-02s"} icon={faMicrophone} />

          <div className={style.micMessage + primary_text + primary_bg + " border-1 d-flex flex-row align-items-center justify-content-center transition-02s"}>
            push to record
          </div>

          {recorderState && <div className={style.micCounter + primary_text + primary_bg + " border-1 d-flex flex-row align-items-center justify-content-center transition-02s bg-light text-danger"}>
            {timeRecord}
          </div>}


        </div>

        <div className={style.fileButton + " col-1 full-height d-flex flex-column justify-content-evenly"}>
          <FontAwesomeIcon className={primary_text + " font-4 transition-02s"} icon={faFile} />

        </div>


      </form>

    </div>
  );
};

export default InputBar;
