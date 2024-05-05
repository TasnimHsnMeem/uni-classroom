import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { IUser } from './user.interface';
import User from './user.model';
import { Types } from 'mongoose';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const newUser = await User.create(user);
  return newUser;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const { ...userData } = payload;

  const updatedUserData: Partial<IUser> = { ...userData };
  const result = await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  });
  return result;
};

const updateUserProfile = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const { ...userData } = payload;

  const updatedUserData: Partial<IUser> = { ...userData };
  const result = await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  });
  return result;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const newUser = await User.find();
  return newUser;
};

const getUserProfile = async (id: string): Promise<IUser | null> => {
  const user = await User.findOne(
    { _id: new Types.ObjectId(id) },
    { name: 1, phoneNumber: 1, address: 1 }
  );
  if (user) {
    return user;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);
  if (user) {
    return user;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }
};

const deleteSingleUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findByIdAndDelete(id);
  if (user) {
    return user;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }
};

export const UserService = {
  createUser,
  updateUser,
  getAllUsers,
  getSingleUser,
  getUserProfile,
  deleteSingleUser,
  updateUserProfile,
};
