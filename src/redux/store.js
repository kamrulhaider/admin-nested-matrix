import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  devTools: false,
  // devTools: process.env.NODE_ENV !== "production",
});
