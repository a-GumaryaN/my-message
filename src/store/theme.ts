import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  border: " border-primary ",
  text: " text-light ",
  bg_active: " bg-active-primary ",
  bg: " bg-dark ",
  btn: " btn-outline-primary ",
  text_import: " text-primary ",
  scroll: " scroll_primary ",
  scroll_bg: " scroll_dark ",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return state=action.payload;
    },
  },
});

export const { setTheme } = theme.actions;

export default theme.reducer;
