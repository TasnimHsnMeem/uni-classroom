import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;
    const result = await UserService.createUser(userData);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  }
);

const updateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await UserService.updateUser(id, userData);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  }
);

const updateMyUserProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // const id = req.params.id;
    const userData = req.body;
    const userId = req.user?.userId;
    // const role = req.user?.role;
    const result = await UserService.updateUserProfile(userId, userData);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  }
);

const getAllUsers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
    sendResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSingleUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.getSingleUser(id);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSingleUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.deleteSingleUser(id);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getUserProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;
    // const role = req.user?.role;
    const result = await UserService.getUserProfile(userId);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
  updateUser,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  getUserProfile,
  updateMyUserProfile,
};
