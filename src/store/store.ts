import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import authentication from "./authentication";
import theme from "./theme";
import modal from "./modal";
import temperature from "./temperature";
import asidePage from "./asidePage";

const store = configureStore({
  reducer: { selectedPerson, authentication, theme, modal, temperature, asidePage },
});

export default store;
