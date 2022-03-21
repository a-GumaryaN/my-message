import { createSlice } from "@reduxjs/toolkit";

const initialState = { type: "", message: "", title: "" };

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message;
            state.title = action.payload.title;
            state.type = action.payload.type;
        },
    },
});

export const { setMessage } = modal.actions;

export default modal.reducer;
