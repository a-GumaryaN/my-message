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
const submitHandler = (data: FormEvent) => {
  data.preventDefault();
};
const InputBar: FC<{}> = () => {
  const { border, btn, bg, text } = useSelector((state: any) => {
    return state.theme;
  });

  const [buttonDisplay, setButtonDisplay] = useState(true);

  return (
    <form
      onSubmit={submitHandler}
      style={{ height: "10%" }}
      className={
        border +
        bg +
        "col-12 d-flex flex-row border-3 border-top " +
        " p-2 align-items-center justify-content-center" +
        " position-absolute bottom-0 star-0 "
      }
    >
      <button
        className={
          btn +
          "col-auto btn btn-outline-primary " +
          " btn-lg mx-2 d-flex flex-column " +
          " align-items-center"
        }
      >
        send
      </button>
      <div className="col-6 mx-2">
        <input className={border + " form-control text-dark p-1 "} />
      </div>

      <div className={style["auto-show"]}>
        {/* <div className={"d-flex flex-column position-fixed " + (buttonDisplay && " show ")}>
          <button
            className={
              btn +
              "col-auto btn btn-lg mx-2 d-flex " +
              " flex-column align-items-center " 
            }
          >
            <FontAwesomeIcon icon={faFaceSmile} />
          </button>
          <button
            className={
              btn +
              "col-auto btn btn-lg mx-2 d-flex " +
              " flex-column align-items-center " 
            }
          >
            <FontAwesomeIcon icon={faFile} />
          </button>
        </div> */}

        <button className={"btn btn-lg " + btn}>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
      </div>

      <button
        className={
          btn +
          "col-auto btn btn-lg mx-2 d-flex " +
          " flex-column align-items-center " +
          style["auto-hidden"]
        }
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </button>
      <button
        className={
          btn +
          "col-auto btn btn-lg mx-2 d-flex " +
          " flex-column align-items-center " +
          style["auto-hidden"]
        }
      >
        <FontAwesomeIcon icon={faFile} />
      </button>
    </form>
  );
};

export default InputBar;
