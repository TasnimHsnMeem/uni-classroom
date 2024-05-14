import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ISubmission } from './submission.interface';
import { SubmissionService } from './submission.service';

const createSubmission: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const classData = req.body;
    const result = await SubmissionService.createSubmission(classData);
    sendResponse<ISubmission>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Submission created successfully!',
      data: result,
    });
  }
);

const updateSubmission: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await SubmissionService.updateSubmission(id, userData);
    sendResponse<ISubmission>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Submission updated successfully!',
      data: result,
    });
  }
);


const getAllSubmissions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userId =  req.headers.userid as string;
    const result = await SubmissionService.getAllSubmissiones(userId);
    sendResponse<ISubmission[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSingleSubmission: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SubmissionService.getSingleSubmission(id);
    sendResponse<ISubmission>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const joinSubmission: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userId = req.headers.userid as string;
    const result = await SubmissionService.joinSubmission(id, userId);
    sendResponse<ISubmission>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSingleSubmission: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SubmissionService.deleteSingleSubmission(id);
    sendResponse<ISubmission>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

export const SubmissionController = {
  createSubmission,
  joinSubmission,
  updateSubmission,
  getAllSubmissions,
  getSingleSubmission,
  deleteSingleSubmission,
};
