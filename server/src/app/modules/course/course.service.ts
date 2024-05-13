import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { ICourse } from './course.interface';
import Course from './course.model';

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

const getAllClasses = async (teacherId: string): Promise<ICourse[]> => {
  const allClasses = await Course.find().populate('post');
  const filteredClasses = allClasses.filter((course) => teacherId === course.teacher._id.toString());
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
  updateClass,
  getAllClasses,
  getSingleClass,
  deleteSingleClass,
};
