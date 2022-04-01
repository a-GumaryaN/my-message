import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import authentication from "./authentication";
import theme from "./theme";
import modal from "./modal";
import temperature from "./temperature";
import asidePageSlice from "./asidePageSlice";

const store = configureStore({
  reducer: { selectedPerson, authentication, theme, modal, temperature, asidePageSlice },
});

export default store;
