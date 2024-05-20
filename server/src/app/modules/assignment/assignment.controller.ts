import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAssignment } from './assignment.interface';
import { AssignmentService } from './assignment.service';

const createAssignment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const assignmentData = req.body;
    const { courseId } = req.query;
    const result = await AssignmentService.createAssignment(courseId as string, assignmentData);
    sendResponse<IAssignment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment created successfully!',
      data: result,
    });
  }
);

const updateAssignment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await AssignmentService.updateAssignment(id, userData);
    sendResponse<IAssignment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Assignment updated successfully!',
      data: result,
    });
  }
);

const getAllAssignments: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AssignmentService.getAllAssignments();
    sendResponse<IAssignment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSingleAssignment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AssignmentService.getSingleAssignment(id);
    sendResponse<IAssignment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSingleAssignment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { courseId } = req.query;
    const result = await AssignmentService.deleteSingleAssignment(id, courseId as string);
    sendResponse<IAssignment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const uploadImage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // const result = await AssignmentService.uploadImage(req);
    sendResponse<string>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Image uploaded successfully!',
      data: req.file!.filename,
    });
  }
);

export const AssignmentController = {
  createAssignment,
  updateAssignment,
  getAllAssignments,
  getSingleAssignment,
  deleteSingleAssignment,
  uploadImage,
};
