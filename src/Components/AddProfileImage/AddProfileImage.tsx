import { FC, useState } from "react";
import style from "./AddProfileImage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";
import { setMessage } from "../../store/modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../store/authentication";
import usefetch from "../../hooks/useFetch/useFetch";


const AddProfileImage: FC<{}> = (props) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { fullName, token } = useSelector((state: any) => {
    return state.authentication;
  });

  const [image, setImage] = useState<any>(null);
  const [imageURL, setImageURL] = useState("");

  const submitHandler = async (data: FormEvent) => {
    data.preventDefault();

    if (image) {

      const formData = new FormData();

      formData.append(fullName + '_profile_mage', image!,);

      const config = {
        headers: {
          token,
        }
      }

      axios
        .post('http://localhost:4000/upload', formData, config)
        .then((res) => {
          dispatch(setMessage({
            type: 'success',
            message: 'image uploaded successfully',
            title: 'upload'
          }));
          console.log(res);
          navigate("../user", { replace: true });
        })
        .catch((error) => {
          dispatch(setMessage({
            type: 'error',
            message: 'problem in send data',
            title: 'upload error:'
          }));
        });

      const user = JSON.parse(localStorage.getItem("my-message")!);

      user.profileImage = 'http://localhost:4000/profile_image/' + user.email + "/" + image.name;

      const updateQuery = `mutation{
        updateUser(user:{profileImage:"${user.profileImage}"}){
          error
        }
      }`

      const { error } = await usefetch(updateQuery, { token: user.token });

      if (error) dispatch(setMessage({
        type: 'error',
        message: error,
        title: 'upload error:'
      }));

      console.log(user);

      localStorage.setItem("my-message", JSON.stringify(user));

      dispatch(login(user));

    }
    navigate("../", { replace: true });

  };

  const fileChecker = (e: any) => {

    const file = e.target.files[0]


    // if (!(/image.*/.test(file.type))) {
    //   dispatch(setMessage({
    //     type: 'error',
    //     message: 'only image file allowed',
    //     title: 'file type error:'
    //   }));
    //   return;
    // }

    // if (file.size > 2048) {
    //   dispatch(setMessage({
    //     type: 'error',
    //     message: 'file must be less than 2MB',
    //     title: 'file size error:'
    //   }));

    //   return;
    // }

    setImage(file);
    setImageURL(URL.createObjectURL(file));

  }

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
        accept="image/*"
        onChange={fileChecker}
        style={{ display: "none" }}
      />

      <label
        htmlFor="profileImage"
        className={"col-5 border border-2 " + style.button}
      >

        {imageURL ? <img className="col-11" src={imageURL} /> : <FontAwesomeIcon icon={faPlus} />}

      </label>

      {imageURL && <p>click on your image to change it</p>}
      <p>you can ignore that</p>

      <button className="col-12 col-md-4 col-lg-3 btn btn-lg btn-primary">
        add
      </button>
    </form>
  );
};

export default AddProfileImage;
