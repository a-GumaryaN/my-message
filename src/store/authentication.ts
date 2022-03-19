import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  fullName: string;
  email: string;
  token: string;
  profileImage: null | string;
} = {
  fullName: "",
  email: "",
  token: "",
  profileImage: null,
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      return (state = action.payload);
    },
    logout: (state, action) => {
      return (state = initialState);
    },
  },
});

export const { login } = authentication.actions;

export default authentication.reducer;
