import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { ICourse } from './course.interface';
import Course from './course.model';
import { Types } from 'mongoose';
import User from '../user/user.model';
import { USER_ROLE } from '../../../enums';
import Assignment from '../assignment/assignment.model';
import Submission from '../submission/submission.model';

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

  const { name } = payload;

  const updatedClassData: Partial<ICourse> = { name };
  const result = await Course.findByIdAndUpdate(id, updatedClassData, {
    new: true,
  });
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
  });
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
  } else if (user.role === USER_ROLE.ADMIN) {
    filteredClasses = await Course.find().populate('teacher');
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

const leaveClass = async (
  id: string,
  studentId: string
): Promise<ICourse | null> => {
  // Check if the class exists
  const isExist = await Course.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found!');
  }

  // Check if the user exists and is a student
  const user = await User.findById(studentId);
  if (!user || user.role !== USER_ROLE.STUDENT) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }

  // Remove student's submissions related to the class assignments
  const assignments = await Assignment.find({
    _id: { $in: isExist.assignments },
  });
  const submissions = await Submission.find({
    student: studentId,
    assignment: { $in: assignments.map(a => a._id) },
  });

  // Delete submissions
  await Submission.deleteMany({ _id: { $in: submissions.map(s => s._id) } });

  // Remove submissions from assignments
  await Assignment.updateMany(
    { _id: { $in: assignments.map(a => a._id) } },
    { $pull: { submissions: { $in: submissions.map(s => s._id) } } }
  );

  // Remove the student from the class
  const updatedClassData: any = {
    $pull: { student: studentId },
  };

  const result = await Course.findByIdAndUpdate(id, updatedClassData, {
    new: true,
  });

  return result;
};

export const CourseService = {
  createClass,
  joinClass,
  updateClass,
  getAllClasses,
  getSingleClass,
  deleteSingleClass,
  leaveClass,
};
