import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAdminNotice } from './adminNotice.interface';
import { AdminNoticeService } from './adminNotice.service';

const createAdminNotice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const AdminNoticeData = req.body;
    const { courseId } = req.query;
    const result = await AdminNoticeService.createAdminNotice(courseId as string, AdminNoticeData);
    sendResponse<IAdminNotice>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AdminNotice created successfully!',
      data: result,
    });
  }
);

const updateAdminNotice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await AdminNoticeService.updateAdminNotice(id, userData);
    sendResponse<IAdminNotice>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AdminNotice updated successfully!',
      data: result,
    });
  }
);

const getAllAdminNotices: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AdminNoticeService.getAllAdminNotices();
    sendResponse<IAdminNotice[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSingleAdminNotice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AdminNoticeService.getSingleAdminNotice(id);
    sendResponse<IAdminNotice>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSingleAdminNotice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AdminNoticeService.deleteSingleAdminNotice(id);
    sendResponse<IAdminNotice>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const uploadImage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // const result = await AdminNoticeService.uploadImage(req);
    sendResponse<string>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Image uploaded successfully!',
      data: req.file!.filename,
    });
  }
);

export const AdminNoticeController = {
  createAdminNotice,
  updateAdminNotice,
  getAllAdminNotices,
  getSingleAdminNotice,
  deleteSingleAdminNotice,
  uploadImage,
};
