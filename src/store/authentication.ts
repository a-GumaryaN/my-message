import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  fullName: string;
  email: string;
  token: string;
  profileImage: null | string;
  code: string
} = {
  fullName: "",
  email: "",
  token: "sffdgbbfgnhg",
  profileImage: "",
  code: ""
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      return state = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem('my-message');
      return (state = initialState);
    },
  },
});

export const { login, logout } = authentication.actions;

export default authentication.reducer;
