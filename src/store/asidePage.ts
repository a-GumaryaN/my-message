import { createSlice } from "@reduxjs/toolkit";

const initialState = { asidePages: ['profile setting'] };

const asidePage = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setAsidePage: (state: any, action) => {
            return state = state.push(action.payload.newPage);
        },
        asideGoBack: (state: any, action) => {
            state.pop();
            return state;
        }
    },
});

export const { setAsidePage, asideGoBack } = asidePage.actions;

export default asidePage.reducer;
