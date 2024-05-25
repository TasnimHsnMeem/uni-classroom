import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IPost } from './post.interface';
import { PostService } from './post.service';

const createPost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const postData = req.body;
    const { courseId } = req.query;
    const result = await PostService.createPost(courseId as string, postData);
    sendResponse<IPost>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Post created successfully!',
      data: result,
    });
  }
);

const updatePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await PostService.updatePost(id, userData);
    sendResponse<IPost>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Post updated successfully!',
      data: result,
    });
  }
);

const getAllPosts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.getAllPosts();
    sendResponse<IPost[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const getSinglePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PostService.getSinglePost(id);
    sendResponse<IPost>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const deleteSinglePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const postId = req.params.id;
    const courseId = req.query.courseId as string;
    const result = await PostService.deleteSinglePost(courseId, postId);
    sendResponse<IPost>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success',
      data: result,
    });
  }
);

const uploadImage: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // const result = await PostService.uploadImage(req);
    sendResponse<string>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Image uploaded successfully!',
      data: req.file!.filename,
    });
  }
);

export const PostController = {
  createPost,
  updatePost,
  getAllPosts,
  getSinglePost,
  deleteSinglePost,
  uploadImage,
};
