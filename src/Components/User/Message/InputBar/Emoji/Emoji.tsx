import { FC } from "react";
import { useSelector } from "react-redux";
import emojis from "./Emojis";

const Emojis: FC<{ emojiClickHandler: any }> = ({emojiClickHandler}) => {

    const { secondary_text, primary_text, primary_bg, secondary_bg, border } = useSelector((state: any) => {
        return state.theme;
    });

    return <div className={primary_bg + " emoji col-12 col-sm-8 col-md-6 col-lg-5 position-absolute rounded-3"}>

        <ul style={{ height: '15%' }} className="col-auto border-bottom border-3 d-flex flex-row align-items-center justify-content-around ">
            {
            
            emojis.map((item => {
                return <button key={item.title} style={{ backgroundColor: 'inherit', border: 0 }} className="">
                    {item.title}
                </button>
                
            }))}
        </ul>

        <div style={{ height: '75%' }} className="col-12 d-flex flex-row flex-wrap overflow-auto align-items-start justify-content-center ">

            {
                emojis.map(items => {
                    return items.emojis.map(item => {
                        return <button  onClick={() => { emojiClickHandler(item) }} style={{ backgroundColor: 'inherit', border: 0 }} className="">
                            {item}
                        </button>
                    })
                })
            }


        </div>




    </div>
}

export default Emojis;