import { FC } from "react";
import { useSelector } from "react-redux";



const Emojis: FC<{}> = () => {



    const { secondary_text, primary_text, primary_bg, secondary_bg,border } = useSelector((state: any) => {
        return state.theme;
      });



    return <div id="emoji" className={primary_bg+" col-8 col-md-4 position-absolute rounded-3"}>

        <ul style={{ height: '15%' }} className="col-auto border-bottom border-3 d-flex flex-row align-items-center justify-content-around p-1">
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-1">
                &#128525;
            </li>
        </ul>

        <ul style={{ height: '85%' }} className="col-12 d-flex flex-row flex-wrap overflow-hidden align-items-start justify-content-start p-1">

            <li className="d-flex flex-row align-content-center m-2">
                &#128525;
            </li>
            <li className="d-flex flex-row align-content-center m-2">
                &#128525;
            </li>

        </ul>


    </div>
}

export default Emojis;