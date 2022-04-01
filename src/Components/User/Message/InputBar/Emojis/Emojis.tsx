import { FC } from "react";
import { useSelector } from "react-redux";



const Emojis: FC<{}> = () => {

    const { secondary_text, primary_text, primary_bg, secondary_bg, border } = useSelector((state: any) => {
        return state.theme;
    });

    const emojis = {
        smile: [
            '&#x1F642;'
        ]
    };

    return <div className={primary_bg + " emoji col-8 col-md-4 position-absolute rounded-3"}>

        <ul style={{ height: '15%' }} className="col-auto border-bottom border-3 d-flex flex-row align-items-center justify-content-around p-1">
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#x1F642;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
                &#128525;
            </button>
        </ul>

        <div style={{ height: '85%' }} className="col-12 d-flex flex-row flex-wrap overflow-hidden align-items-start justify-content-start p-1">

            <button style={{ backgroundColor: 'inherit', border: 0 }} className="">
            {emojis.smile[0]}
            </button>

        </div>




    </div>
}

export default Emojis;