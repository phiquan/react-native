import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./redux_login";

export const store = configureStore({
    reducer: {
      login: loginSlice.reducer
    },
  });