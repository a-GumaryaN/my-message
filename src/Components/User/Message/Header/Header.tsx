import { FC } from "react";
import { desetPerson } from "../../../../store/selectedPerson";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Header: FC<{}> = (props) => {
  const { fullName,profileImage } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const { primary_text, primary_bg } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  const backClickHandler = () => {
    dispatch(desetPerson({}));
  }


  return (
    <div style={{height: "10%"}} className='col-12 d-flex flex-column align-items-center justify-content-center'>
      <div
      style={{height:'80%', borderRadius:'1rem' }}
      className={
        primary_bg +
        primary_text +
        "col-12 col-md-11 d-flex " +
        " flex-row align-items-center " 
      }
    >
      <FontAwesomeIcon onClick={backClickHandler} className={primary_text + "font-4 ms-3"} icon={faArrowCircleLeft} />
      {(profileImage && <img style={{height:'90%'}} className="rounded-circle mx-2" src={profileImage} />)}
      <span className="font-2 mx-2">{fullName}</span>
    </div >
    </div>
  );
};

export default Header;
