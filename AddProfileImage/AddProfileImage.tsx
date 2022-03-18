import { FC } from "react";
import style from "./AddProfileImage.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";

const AddProfileImage: FC<{}> = (props) => {
  const { border, btn } = useSelector((state: any) => {
    return state.theme;
  });

  const submitHandler = (target: FormEvent) => {
    target.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ height: "70%" }}
      className={
        "col-12 col-md-7 d-flex flex-column align-items-center justify-content-between"
      }
    >
      <p className="display-6">add a profile image</p>

      <input
        type="file"
        name="profileImage"
        id="profileImage"
        style={{ display: "none" }}
      />

      <label
        htmlFor="profileImage"
        className={"col-5 border border-2 " + style.button}
      >
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <p>you can accept that</p>

      <button className="col-12 col-md-4 col-lg-3 btn btn-lg btn-primary">
        add
      </button>
    </form>
  );
};

export default AddProfileImage;
