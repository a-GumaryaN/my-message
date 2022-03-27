import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  email: string;
  nextAction:string;
} = {
  email: "",
  nextAction:""
};

const temperature = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setTemp:(state,actions)=>{
        return state=actions.payload;
    }
  },
});

export const { setTemp } = temperature.actions;

export default temperature.reducer;
