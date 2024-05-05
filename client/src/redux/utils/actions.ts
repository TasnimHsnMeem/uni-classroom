import { AppDispatch } from "../store";
import { utilitySlice } from "./slice";
const { actions: slice } = utilitySlice;

export const setLoadingAction =
  (payload: boolean) => (dispatch: AppDispatch) => {
    dispatch(slice.setLoading(payload));
  };

export const setToggleMenuAction =
    (payload: boolean) => (dispatch: AppDispatch) => {
    dispatch(slice.setToggleMenu(payload));
}
