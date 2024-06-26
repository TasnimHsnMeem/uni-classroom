import { USER_ROLE } from '../../../enums';

export type ILoginUser = {
  email: string;
  password: string;
  [key: string]: any;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IVerifiedLoginUser = {
  userId: string;
  role: USER_ROLE;
};
