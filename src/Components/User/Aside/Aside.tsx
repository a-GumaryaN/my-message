import Card from "./Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { setPerson } from "../../../store/selectedPerson";
import style from "./Aside.module.css";
import { FC } from "react";
const persons = [
  {
    fullName: "friend 1",
    id: "1",
  },
  {
    fullName: "friend 2",
    id: "2",
  },
  {
    fullName: "friend 3",
    id: "3",
  },
  {
    fullName: "friend",
    id: "4",
  },
  {
    fullName: "friend",
    id: "5",
  },
  {
    fullName: "friend",
    id: "6",
  },
  {
    fullName: "friend",
    id: "7",
  },
  {
    fullName: "friend",
    id: "8",
  },
  {
    fullName: "friend",
    id: "9",
  },
  {
    fullName: "friend",
    id: "10",
  },
  {
    fullName: "friend",
    id: "11",
  },
  {
    fullName: "friend",
    id: "12",
  },
  {
    fullName: "friend",
    id: "13",
  },
  {
    fullName: "friend",
    id: "14",
  },
];

const Aside: FC<{}> = (props) => {
  const dispatch = useDispatch();

  const { fullName, id } = useSelector((state: any) => {
    return state.selectedPerson;
  });

  const clickHandler = ({ fullName, id }: { fullName: string; id: string }) => {
    dispatch(setPerson({ fullName, id }));
  };

  return (
    <div
      className={
        "col-12 col-md-3 full-height p-2 " +
        " " +
        style.container +
        " " +
        (id && style.hide)
      }
    >
      {persons.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            clickHandler={clickHandler}
            active={item.id === id}
            fullName={item.fullName}
          />
        );
      })}
    </div>
  );
  return <div className={"col-12 col-md-3 full-height p-2 "}></div>;
};

export default Aside;
