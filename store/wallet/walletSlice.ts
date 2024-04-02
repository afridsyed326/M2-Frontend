// userSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletSliceState {
    overview: any
}

const initialState: WalletSliceState = {
  overview: null,
};

const userSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setOverview: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        overview: action.payload,
      };
    },
  },
});

export const { setOverview } = userSlice.actions;
export const selectWallet = (state: WalletSliceState) =>  state.overview;
export default userSlice.reducer;