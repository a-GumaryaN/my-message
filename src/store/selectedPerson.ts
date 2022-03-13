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
  },
});

export const { setPerson } = selectedPerson.actions;

export default selectedPerson.reducer;
