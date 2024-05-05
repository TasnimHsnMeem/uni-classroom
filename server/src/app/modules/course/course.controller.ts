import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICourse } from './course.interface';
import { CourseService } from './course.service';

const createCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const classData = req.body;
    const result = await CourseService.createClass(classData);
    sendResponse<ICourse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course created successfully!',
      data: result,
    });
  }
);

const updateCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await CourseService.updateClass(id, userData);
    sendResponse<ICourse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course updated successfully!',
      data: result,
    });
  }
);


const getAllCourses: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.getAllClasses();
    sendResponse<ICourse[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSingleCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CourseService.getSingleClass(id);
    sendResponse<ICourse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSingleCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CourseService.deleteSingleClass(id);
    sendResponse<ICourse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

export const CourseController = {
  createCourse,
  updateCourse,
  getAllCourses,
  getSingleCourse,
  deleteSingleCourse,
};
