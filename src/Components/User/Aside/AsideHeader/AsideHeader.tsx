import { FC } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { asideGoBack } from "../../../../store/asidePageSlice";

const AsideHeader: FC<{ pageName: string }> = ({ pageName }) => {

    const { secondary_bg } = useSelector((state: any) => {
        return state.theme;
    });

    const dispatch = useDispatch();

    return <div style={{ height: '8%' }} className={secondary_bg + "col-12 bg-warning p-2 font-3 d-flex flex-row align-items-center justify-content-start"}>
        <FontAwesomeIcon onClick={() => { dispatch(asideGoBack({})) }} className="font-4 me-3" icon={faArrowLeft} />
        profile setting
    </div>
}

export default AsideHeader;