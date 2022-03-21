import { FC } from "react";
import { desetPerson } from "../../../../store/selectedPerson";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Header: FC<{}> = (props) => {
  const { fullName } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const { text, border,text_import } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  const backClickHandler = () => {
    dispatch(desetPerson({}));
  }


  return (
    <div
      style={{ height: "10%" }}
      className={
        border +
        text +
        "col-12 d-flex " +
        " flex-row align-items-center " +
        " border-3  border-bottom p-4"
      }
    >
      <FontAwesomeIcon onClick={backClickHandler} className={text_import+"font-4 mx-2"} icon={faArrowCircleLeft} />
      <img className="rounded-circle" />
      <span className="font-2">{fullName}</span>
    </div>
  );
};

export default Header;
