import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  fullName: string;
  email: string;
  token: string;
  profileImage: null | string;
} = {
  fullName: "",
  email: "",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY0Nzc5MjQ4MywiZXhwIjoxNjQ3OTY1MjgzfQ.aQndKalWD18B50a-vIltHRTxtjkQ4Whm4jCMEPjL94Y",
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
