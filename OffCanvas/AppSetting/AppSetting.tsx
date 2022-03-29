import { FC } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../../../../store/OffCanvas";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush} from "@fortawesome/free-solid-svg-icons";

const AppSetting: FC<{}> = () => {
  const { text, border, btn } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();
  return (
    <div className="pt-3">
      <button
        onClick={() => {
          dispatch(setPage({ page: "applicationSetting" }));
        }}
        className={"col-11 btn btn-lg p-3 font-2 " + btn}
      >
        <FontAwesomeIcon className="px-2" icon={faBrush} />
        application setting
      </button>
    </div>
  );
};

export default AppSetting;
