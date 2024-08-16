import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, actions) => {
      (state.status = true), (state.user = actions.payload);
    },
    logout: (state, actions) => {
      (state.status = false), (state.user = null);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
