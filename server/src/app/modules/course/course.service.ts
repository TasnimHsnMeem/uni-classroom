import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { ICourse } from './course.interface';
import Course from './course.model';
import { Types } from 'mongoose';
import User from '../user/user.model';
import { USER_ROLE } from '../../../enums';

const createClass = async (user: ICourse): Promise<ICourse | null> => {
  const newClass = (await Course.create(user)).populate('teacher');
  return newClass;
};

const updateClass = async (
  id: string,
  payload: Partial<ICourse>
): Promise<ICourse | null> => {
  const isExist = await Course.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found !');
  }

  const { ...classData } = payload;

  const updatedClassData: Partial<ICourse> = { ...classData };
  const result = await Course.findByIdAndUpdate(id, updatedClassData, {
    new: true,
  })
    .populate('teacher')
    .populate('posts');
  return result;
};

const joinClass = async (
  id: string,
  studentId: string
): Promise<ICourse | null> => {
  const isExist = await Course.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found !');
  }

  const user = await User.findById(studentId);
  if (!user || user.role !== USER_ROLE.STUDENT) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const updatedClassData: any = {
    $addToSet: { student: studentId },
  };

  const result = await Course.findByIdAndUpdate(id, updatedClassData, {
    new: true,
  })
  return result;
};

const getAllClasses = async (userId: string): Promise<ICourse[]> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }
  let filteredClasses: any = [];
  if (user.role === USER_ROLE.TEACHER) {
    const allClasses = await Course.find().populate('post');
    filteredClasses = allClasses.filter(
      course => userId === course.teacher._id.toString()
    );
  } else if (user.role === USER_ROLE.STUDENT) {
    filteredClasses = await Course.find({
      student: { $in: [new Types.ObjectId(userId)] },
    }).populate('teacher');
  }

  return filteredClasses;
};

const getSingleClass = async (id: string): Promise<ICourse | null> => {
  const selectedClass = await Course.findById(id).populate('teacher');
  if (selectedClass) {
    return selectedClass;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found !');
  }
};

const deleteSingleClass = async (id: string): Promise<ICourse | null> => {
  const _class = await Course.findByIdAndDelete(id);
  if (_class) {
    return _class;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found !');
  }
};

export const CourseService = {
  createClass,
  joinClass,
  updateClass,
  getAllClasses,
  getSingleClass,
  deleteSingleClass,
};
