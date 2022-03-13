import { FC } from "react";
import selectedPerson from "../../../../store/selectedPerson";
import { useSelector,useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Header: FC<{}> = (props) => {
  const { fullName } = useSelector((state: any) => {
    return state.selectedPerson;
  });
  return (
    <div
      style={{ height: "10%" }}
      className="col-12 text-light d-flex flex-row align-items-center border-3 border-primary border-bottom p-4"
    >
   
      <img className="rounded-circle" />
      <span className="font-2">{fullName}</span>
    </div>
  );
};

export default Header;
