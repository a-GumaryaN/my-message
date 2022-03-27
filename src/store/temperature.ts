import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  email: string;
  fullName: string;
  code: string;
  profileImage: string;
  nextAction: string;
} = {
  email: "",
  fullName: "",
  code: "",
  profileImage: "",
  nextAction: "",
};

const temperature = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setTemp: (state, actions) => {
      return state = actions.payload;
    }
  },
});

export const { setTemp } = temperature.actions;

export default temperature.reducer;
