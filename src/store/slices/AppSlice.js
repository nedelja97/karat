import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  locale: "en",
  isLoading: false,
  isGlobalError: false,
  isDeleting: false,
  drawerType: false,
  appData: null,
  finishedOnboarding: false,
  installation_id: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.locale = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setGlobalError: (state, action) => {
      state.isGlobalError = action.payload;
    },
    clearGlobalError: (state) => {
      state.isGlobalError = false;
    },
    setIsDeleting: (state, action) => {
      state.isDeleting = action.payload;
    },
    setDrawerContent: (state, action) => {
      state.drawerType = action.payload;
    },
    setAppData: (state, action) => {
      state.appData = action.payload;
    },
    setFinishedOnboarding: (state) => {
      state.finishedOnboarding = true;
    },
    setInstallId: (state, { payload }) => {
      state.installation_id = payload.id;
    },
    clearInstallId: (state) => {
      state.installation_id = null;
    },
  },
});

export const languageSelector = () =>
  useSelector((store) => store.appSlice.locale);

export const isDeletingSelector = () =>
  useSelector((store) => store.appSlice.isDeleting);

export const drawerContentSelector = () =>
  useSelector((store) => store.appSlice.drawerType);

export const appDataSelector = () =>
  useSelector((store) => store.appSlice.appData);

export const finishedOnboardingSelector = () =>
  useSelector((store) => store.appSlice.finishedOnboarding);

export const useAppInstallSelector = () =>
  useSelector((store) => store.appSlice.installation_id);

export const {
  setLanguage,
  setIsLoading,
  setGlobalError,
  clearGlobalError,
  setIsDeleting,
  setDrawerContent,
  setAppData,
  setFinishedOnboarding,
  setInstallId,
  clearInstallId,
} = appSlice.actions;

// export default appSlice.reducer;
