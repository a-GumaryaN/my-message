import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const MenuList: FC<{}> = (props) => {
  return (
    <ul className={"col-12 overflow-auto full-height " }>
      <li
        className={
          "col-11 border-2 border border-secondary py-2 px-3 mb-2  "+
          " rounded text-light font-2 d-flex flex-row "+
          " justify-content-center "
        }
      >
        <FontAwesomeIcon className="mx-2" icon={faUserAlt} />
        account setting
      </li>

     

    </ul>
  );
};

export default MenuList;
