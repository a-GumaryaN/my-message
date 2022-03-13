import { configureStore } from "@reduxjs/toolkit";
import selectedPerson from "./selectedPerson";
import OffCanvas from "./OffCanvas";
import authentication from "./authentication";

const store = configureStore({
  reducer: { OffCanvas, selectedPerson, authentication },
});

export default store;
