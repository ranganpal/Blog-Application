import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    userdata: null
  },
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userdata = action.payload.userdata;
    },
    logout: (state) => {
      state.status = true;
      state.userdata = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;