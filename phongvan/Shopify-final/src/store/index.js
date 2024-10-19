import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slices/commonSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    commonSlice,
    authSlice,
    cartSlice,
  },
});
