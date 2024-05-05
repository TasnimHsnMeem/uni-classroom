import { createSlice } from "@reduxjs/toolkit";

const initState = {
  profileData: {
    isAuth: false,
    user: {
      _id: "",
      // password: "abrakadabra",
      role: "",
      name: {
        firstName: "",
        lastName: "",
      },
      phoneNumber: "",
      email: "",
      address: "",
      classes: [],
    },
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setAuthStateEmpty: () => {
      return initState;
    },
    setUserProfile: (state, action) => {
      console.log("action", action);
      const { payload } = action;
      const { accessToken, ...user } = payload;
      state.profileData = {
        ...state.profileData,
        user: user,
        isAuth: true,
      };
    },
  },
});
