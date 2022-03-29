import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeName:"light",
  shadow:" shadow-light ",
  border:' border-light ',
  primary_text:' text-primary-light ',
  secondary_text:' text-secondary-light ',
  primary_bg:' bg-primary-light ',
  secondary_bg:' bg-secondary-light ',
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
