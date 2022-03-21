import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  id: null,
};

const selectedPerson = createSlice({
  name: "selectedPerson",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      return state = action.payload;
    },
    desetPerson: (state, action) => {
      return state = initialState;
    },
  },
});

export const { setPerson,desetPerson } = selectedPerson.actions;

export default selectedPerson.reducer;
