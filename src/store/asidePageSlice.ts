import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const asidePageSlice = createSlice({
    name: "asidePageSlice",
    initialState,
    reducers: {
        setAsidePage: (state: any, { payload }) => {
            return [...state, payload]
        },
        asideGoBack: (state: any, actions) => {
            state.pop();
        },
        resetAside: (state) => {
            return state = initialState;
        }
    }
});

export const { setAsidePage, asideGoBack, resetAside } = asidePageSlice.actions;

export default asidePageSlice.reducer;