import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  token: "",
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {},
  },
});

export const { login } = authentication.actions;

export default authentication.reducer;
