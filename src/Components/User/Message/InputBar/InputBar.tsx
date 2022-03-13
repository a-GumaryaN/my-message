import { FC, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFile } from "@fortawesome/free-solid-svg-icons";
const submitHandler = (data: FormEvent) => {
  data.preventDefault();
};
const InputBar: FC<{}> = () => {
  return (
    <form
      onSubmit={submitHandler}
      style={{ height: "10%" }}
      className={
        "col-12 bg-dark d-flex flex-row border-3 border-primary border-top " +
        " p-2 align-items-center justify-content-center" +
        " position-absolute bottom-0 star-0 "
      }
    >
      <button className="col-auto btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center">
        send
      </button>
      <div className="col-6 mx-2">
        <input className=" form-control text-dark p-3 " />
      </div>
      <button className="col-auto btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center ">
        <FontAwesomeIcon icon={faFaceSmile} />
      </button>
      <button className="col-auto btn btn-outline-primary btn-lg mx-2 d-flex flex-column align-items-center ">
        <FontAwesomeIcon icon={faFile} />
      </button>
    </form>
  );
};

export default InputBar;
