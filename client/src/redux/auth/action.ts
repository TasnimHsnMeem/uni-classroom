import { Dispatch } from "redux";
import * as tokenService from "../../services/token";
import { login } from "../../services/auth";
import { authSlice } from "./slice";
import { AppDispatch } from "../store";
import { logger } from "../../utils/logger";
import httpStatus from "http-status";
const { actions: slice } = authSlice;

export const userSignIn = (payload: { email: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await login(payload);
      if (res?.status === httpStatus.UNAUTHORIZED){
        return Promise.reject(res?.data?.message);
      }
      tokenService.setAccessToken(res?.data?.data?.accessToken);
      dispatch(slice.setUserProfile(res?.data?.data));
      return Promise.resolve(res?.data?.data);
    } catch (error) {
      logger.error({ error: error });
      return Promise.reject('Email or password did not match');
    }
  };
};

export const setUserProfileAction =
  (payload: any) => (dispatch: AppDispatch) => {
    dispatch(slice.setUserProfile(payload));
  };

export const setAuthStateEmptyAction = () => (dispatch: AppDispatch) => {
  dispatch(slice.setAuthStateEmpty());
};
