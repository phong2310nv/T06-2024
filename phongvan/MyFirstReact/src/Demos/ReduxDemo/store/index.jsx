import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlide";
// import userReducer from "./slices/counterSlide";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
  },
});
