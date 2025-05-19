import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  user: null,
  token: null,
  uuid: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.token = null;
      state.uuid = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUuid: (state, action) => {
      state.uuid = action.payload;
    },
  },
});

export const userSelector = () => useSelector((store) => store.userSlice.user);
export const tokenSelector = () =>
  useSelector((store) => store.userSlice.token);
export const UuidSelector = () => useSelector((store) => store.userSlice.uuid);

export const { setCredentials, logoutUser, setUser, setToken, setUuid } =
  userSlice.actions;
