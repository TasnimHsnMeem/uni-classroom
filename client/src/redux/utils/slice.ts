import { createSlice } from "@reduxjs/toolkit";

const initState = {
  loading: false,
  toggleMenu: false
};

export const utilitySlice = createSlice({
  name: "utils",
  initialState: initState,
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
    setToggleMenu: (state, action)=>{
      const {payload} = action;
      state.toggleMenu = payload;
    }
  },
});
