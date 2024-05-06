/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from '../../../enums';

export type IUser = {
  id?: string;
  password: string;
  role: USER_ROLE.STUDENT | USER_ROLE.TEACHER | USER_ROLE.ADMIN;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  email: string;
  courses: string[];
};

export type IsUserExist = Pick<IUser, 'password' | 'role' | 'id' | 'role'>;

export type UserModel = {
  isUserExist(id: string): Promise<IsUserExist>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
