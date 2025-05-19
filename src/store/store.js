import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import localStorage for web
import { appSlice } from "./slices/AppSlice";
import { userSlice } from "./slices/UserSlice";
import { apiBase } from "./api/apiBase";

// ✅ Define Reducers with Proper Keys
const rootReducer = combineReducers({
  [apiBase.reducerPath]: apiBase.reducer,
  user: userSlice.reducer, // Changed from "userSlice" to "user"
  app: appSlice.reducer, // Changed from "appSlice" to "app"
});

// ✅ Persist Configuration
const persistConfig = {
  key: "root",
  storage, // Required for redux-persist
  whitelist: ["user", "app"], // Specify which slices to persist
};

// ✅ Create Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Create Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Avoid warnings
      },
    }).concat(apiBase.middleware),
});

// ✅ Persistor for PersistGate
export const persistor = persistStore(store);
