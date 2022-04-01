import { createSlice } from "@reduxjs/toolkit";

const initialState:any[] = [];

const asidePageSlice = createSlice({
    name: "asidePageSlice",
    initialState,
    reducers: {
        setAsidePage: (state: any, { payload }) => {
            return  [...state, payload] 
        },
        asideGoBack:(state:any,actions)=>{
            state.pop();
        }
    }
});

export const { setAsidePage, asideGoBack } = asidePageSlice.actions;

export default asidePageSlice.reducer;