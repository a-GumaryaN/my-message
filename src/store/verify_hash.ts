import { createSlice } from "@reduxjs/toolkit";

const initialState = { verify_hash: "", code: "", email: "" };

const verify_hash = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setVerifyInfo: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { setVerifyInfo } = verify_hash.actions;

export default verify_hash.reducer;
