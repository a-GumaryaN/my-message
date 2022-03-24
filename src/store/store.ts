import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import OffCanvas from "./OffCanvas";
import authentication from "./authentication";
import theme from "./theme";
import modal from "./modal";

const store = configureStore({
  reducer: { OffCanvas, selectedPerson, authentication, theme, modal, },
});

export default store;
