
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import Post from './post.model';
import { IPost } from './post.interface';
import Course from '../course/course.model';

const createPost = async (courseId: string, post: IPost): Promise<IPost | null> => {
  const newPost = (await Post.create(post))
  return await Course.findByIdAndUpdate(courseId, { $push: { post: newPost._id } })
};

const updatePost = async (
  id: string,
  payload: Partial<IPost>
): Promise<IPost | null> => {
  const isExist = await Post.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found !');
  }

  const { ...PostData } = payload;

  const updatedPostData: Partial<IPost> = { ...PostData };
  const result = await Post.findByIdAndUpdate(id, updatedPostData, {
    new: true,
  })
  return result;
};

const getAllPosts = async (): Promise<IPost[]> => {
  const allPostes = await Post.find();
  return allPostes;
};

const getSinglePost = async (id: string): Promise<IPost | null> => {
  const selectedPost = await Post.findById(id);
  if (selectedPost) {
    return selectedPost;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found !');
  }
};

const deleteSinglePost = async (id: string): Promise<IPost | null> => {
  const _Post = await Post.findByIdAndDelete(id);
  if (_Post) {
    return _Post;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found !');
  }
};


export const PostService = {
  createPost,
  updatePost,
  getAllPosts,
  getSinglePost,
  deleteSinglePost,
};
