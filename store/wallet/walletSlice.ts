// userSlice.js

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletSliceState {
    overview: any;
    transactions: { result: any[] };
}

const initialState: WalletSliceState = {
    overview: null,
    transactions: { result: [] },
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
        setTransactionHistory: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                transactions: action.payload,
            };
        },
    },
});

export const { setOverview, setTransactionHistory } = userSlice.actions;
export const selectWallet = (state: any) => state.wallet;
export default userSlice.reducer;
