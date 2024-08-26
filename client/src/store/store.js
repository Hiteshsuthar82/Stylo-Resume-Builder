import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
