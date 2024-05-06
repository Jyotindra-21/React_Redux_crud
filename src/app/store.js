import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    product: userSlice,
  },
});
