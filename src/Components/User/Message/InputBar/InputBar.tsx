import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faFile } from "@fortawesome/free-solid-svg-icons";
const InputBar: FC<{}> = () => {
  return (
    <form
      style={{ height: "10%" }}
      className={
        "col-12 bg-dark d-flex flex-row border-3 border-secondary border-top " +
        " p-2 align-items-center justify-content-center" +
        " position-absolute bottom-0 star-0 "
      }
    >
      <button className="col-2 btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center">send</button>
      <div className="col-6 mx-2">
        <input className=" form-control text-dark p-3 " />
      </div>
      <button className="col-1 btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center ">
        <FontAwesomeIcon icon={faFaceAngry} />
      </button>
      <button className="col-1 btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center ">
        <FontAwesomeIcon icon={faFile} />
      </button>
    </form>
  );
};

export default InputBar;
