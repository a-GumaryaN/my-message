import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import OffCanvas from "./OffCanvas";
import authentication from "./authentication";
import theme from "./theme";

const store = configureStore({
  reducer: { OffCanvas, selectedPerson, authentication, theme },
});

export default store;
