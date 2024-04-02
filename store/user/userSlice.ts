// userSlice.js

import { getAccessTokenFromCookie, getUserFromCookie, removeAccessTokenCookie, setAccessTokenCookie, setUserCookie } from "@/utils/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceState {
  accessToken: any;
  user: any;
}

const initialState: UserSliceState = {
  accessToken: getAccessTokenFromCookie() || "",
  user: getUserFromCookie() || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<any>) => {
        setAccessTokenCookie(action.payload.token);
        setUserCookie(action.payload.user)
      return {
        ...state,
        accessToken: action.payload.token,
        user: action.payload.user,
      };
    },
    setLogout: (state) => {
        removeAccessTokenCookie();
      return {
        ...state,
        accessToken: "",
        user: null,
      };
    },
  },
});

export const { setLogIn, setLogout } = userSlice.actions;
export const selectUser = (state: UserSliceState) =>  state.user.user;
export default userSlice.reducer;