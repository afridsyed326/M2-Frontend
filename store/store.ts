//REDUX-TOOLKIT
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";


//SLICES
import userSlice from "./user/userSlice"
import walletSlice from "./wallet/walletSlice";

const rootReducer = combineReducers({
  user: userSlice,
  wallet: walletSlice
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;