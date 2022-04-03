import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeName: "night",
    themeType: 'dark',
    border: ' border-dark ',
    primary_text: ' text-primary-dark ',
    secondary_text: ' text-secondary-dark ',
    primary_bg: ' bg-primary-dark ',
    shadow: " shadow-dark ",
    secondary_bg: ' bg-secondary-dark ',
    active_bg:' bg-active-dark ',
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
