import { FC } from "react";
import Card from "./Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { setPerson } from "../../../../store/selectedPerson";

const persons = [
    {
        email: "jane@gmail.com",
        fullName: "jane doe",
        profileImage: "http://localhost:4000/profile_image/jane@gmail.com/jane.jpeg"
    },
    {
        email: "emily@gmail.com",
        fullName: "emily andrew",
        profileImage: "http://localhost:4000/profile_image/emily@gmail.com/emily.jpeg"
    },
    {
        email: "jack@gmail.com",
        fullName: "jack anderson",
        profileImage: "http://localhost:4000/profile_image/jack@gmail.com/jack.jpeg"
    },
    {
        email: "sara@gmail.com",
        fullName: "sara clark",
        profileImage: "http://localhost:4000/profile_image/sara@gmail.com/sara.jpeg"
    },
];


const Sidebar: FC<{}> = () => {

    const dispatch = useDispatch();

    const { id } = useSelector((state: any) => {
        return state.selectedPerson;
    });

    const clickHandler = ({ fullName, id, profileImage }: { fullName: string; id: string, profileImage: string }) => {
        dispatch(setPerson({ fullName, id, profileImage }));
    };

    const { secondary_bg } = useSelector((state: any) => {
        return state.theme;
    });


    const container_class = secondary_bg +
        "col-12 full-height p-1 " +
        "overflow-auto d-flex flex-column align-items-center ";


    return <div
        className={container_class}
    >
        {persons.map((item) => {
            return (
                <Card
                    key={item.email}
                    id={item.email}
                    clickHandler={clickHandler}
                    active={item.email === id}
                    fullName={item.fullName}
                    profileImage={item.profileImage}
                />
            );
        })}
    </div>
}

export default Sidebar;