import { combineReducers } from "redux";
import { authSlice } from "./auth/slice";
import { utilitySlice } from "./utils/slice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  utils: utilitySlice.reducer,
});
