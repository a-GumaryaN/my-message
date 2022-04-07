import { FC, useState } from "react";
import style from "./AddProfileImage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";
import { setMessage } from "../../store/modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../store/authentication";
import usefetch from "../../hooks/useFetch/useFetch";
import styled from "styled-components";



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

      try {

        axios.post('http://localhost:4000/upload', formData, config);

        const user = JSON.parse(localStorage.getItem("my-message")!);

        const profileImage = 'http://localhost:4000/profile_image/' + user.email + "/" + image.name;

        user.profileImage = profileImage;

        console.log(token);

        const updateQuery = `mutation{
          updateUser(user:{profileImage:"${profileImage}"}){
            error,
            result
          }
        }`

        const { updateUser } = (await usefetch(updateQuery, token)).data;

        if (updateUser.error) throw updateUser.error;

        localStorage.setItem("my-message", JSON.stringify(user));

        dispatch(login(user));
        console.log(user);

        navigate('../');

      } catch (error) {
        dispatch(setMessage({
          type: 'error',
          message: error,
          title: 'error'
        }));
      }

    }
    navigate("../", { replace: true });

  };

  const fileChecker = (e: any) => {

    const file = e.target.files[0]

    if (file.size > 4096000) {
      dispatch(setMessage({
        type: 'error',
        message: 'file must be less than 4MB',
        title: 'file size error:'
      }));

      return;
    }

    setImage(file);
    setImageURL(URL.createObjectURL(file));

  }

  const Label = styled.label`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & *{
    font-size: 7rem;
  }
  `;

  return (
    <form
      onSubmit={submitHandler}
      style={{ height: "70%" }}
      className={
        "d-flex flex-column align-items-center justify-content-between"
      }
    >
      <p className="font-3">add a profile image</p>

      <input
        type="file"
        name="profileImage"
        id="profileImage"
        accept="image/*"
        onChange={fileChecker}
        style={{ display: "none" }}
      />

      <Label
        htmlFor="profileImage"
        className={"col-5 border border-2 btn-1 " + style.button}
      >

        {imageURL ? <img className="col-11" src={imageURL} /> : <FontAwesomeIcon icon={faPlus} />}

      </Label>

      {imageURL && <p className="font-2">click on your image to change it</p>}
      <p>you can ignore that</p>

      <button className="col-12 col-md-6 btn-1">
        add <FontAwesomeIcon icon={faArrowCircleRight}/>
      </button>
    </form>
  );
};

export default AddProfileImage;
