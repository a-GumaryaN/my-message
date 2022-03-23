import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import OffCanvas from "./OffCanvas";
import authentication from "./authentication";
import theme from "./theme";
import modal from "./modal";
import verify_hash from "./verify_hash";

const store = configureStore({
  reducer: { OffCanvas, selectedPerson, authentication, theme, modal, verify_hash },
});

export default store;
