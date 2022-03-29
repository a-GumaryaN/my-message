import { createSlice } from "@reduxjs/toolkit";

const initialState = { asidePages: [] };

const asidePage = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setAsidePage: (state:any, action) => {
            return state=state.push(action.payload.newPage);
        }
    },
});

export const { setAsidePage } = asidePage.actions;

export default asidePage.reducer;
