import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logoutUser, setToken } from "@/store/slices/UserSlice";
import { REHYDRATE } from "redux-persist";
import { API_BASE } from "@/services/env";

// Base query with headers setup
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.user?.token;
    const locale = "en";

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    headers.set("locale", locale);
    headers.set("Access-Control-Allow-Methods", "GET,PATCH,DELETE,POST,PUT");

    return headers;
  },
});

const handleTokenRefresh = async (api, extraOptions) => {
  const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
  if (refreshResult?.data) {
    api.dispatch(setToken(refreshResult.data.data.token));
    return true;
  }
  api.dispatch(logoutUser());
  return false;
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshSucceeded = await handleTokenRefresh(api, extraOptions);
    if (refreshSucceeded) {
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiBase = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },

  tagTypes: [],
  endpoints: (builder) => ({}),
  overrideExisting: false,
});

export const { invalidateTags } = apiBase.util;
