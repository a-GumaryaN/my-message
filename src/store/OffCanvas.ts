import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "hidden",
};

const offCanvas = createSlice({
  name: "offCanvas",
  initialState,
  reducers: {
    setPage: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { setPage } = offCanvas.actions;

export default offCanvas.reducer;
