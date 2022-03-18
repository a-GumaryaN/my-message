import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../../store/theme";

const ThemeSetting: FC<{}> = () => {
  const { text, border, btn } = useSelector((state: any) => {
    return state.theme;
  });

  const dispatch = useDispatch();

  const themes = [
    {
      name: "green_dark",
      border: " border-info ",
      text: " text-light ",
      bg_active: " bg-active-info ",
      bg: " bg-dark ",
      btn: " btn-outline-info ",
      text_import: " text-info ",
      scroll: " scroll_info ",
      scroll_bg: " scroll_dark ",
    },
    {
      name: "purple_dark",
      border: " border-primary ",
      text: " text-light ",
      bg_active: " bg-active-primary ",
      bg: " bg-dark ",
      btn: " btn-outline-primary ",
      text_import: " text-primary ",
      scroll: " scroll_primary ",
      scroll_bg: " scroll_dark ",
    },
    {
      name: "green_light",
      border: " border-info ",
      text: " text-dark ",
      bg_active: " bg-active-info ",
      bg: " bg-light ",
      btn: " btn-outline-info ",
      text_import: " text-info ",
      scroll: " scroll_info ",
      scroll_bg: " scroll_light ",
    },
    {
      name: "purple_light",
      border: " border-primary ",
      text: " text-dark ",
      bg_active: " bg-active-primary ",
      bg: " bg-light ",
      btn: " btn-outline-primary ",
      text_import: " text-primary ",
      scroll: " scroll_primary ",
      scroll_bg: " scroll_light ",
    },
  ];

  return (
    <div className="d-flex flex-row flex-wrap p-2">
      {themes.map((item) => {
        return (
          <button
            onClick={() => {
              dispatch(setTheme(item));
            }}
            className={text + "col-5 btn btn-lg m-1 col-3 " + item.btn}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSetting;