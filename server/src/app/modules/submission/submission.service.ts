import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { ISubmission } from './submission.interface';
import Submission from './submission.model';
import User from '../user/user.model';
import { USER_ROLE } from '../../../enums';

const createSubmission = async (user: ISubmission): Promise<ISubmission | null> => {
  const newSubmission = (await Submission.create(user)).populate('teacher');
  return newSubmission;
};

const updateSubmission = async (
  id: string,
  payload: Partial<ISubmission>
): Promise<ISubmission | null> => {
  const isExist = await Submission.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Submission not found !');
  }

  const { ...classData } = payload;

  const updatedSubmissionData: Partial<ISubmission> = { ...classData };
  const result = await Submission.findByIdAndUpdate(id, updatedSubmissionData, {
    new: true,
  })
    .populate('teacher')
    .populate('posts');
  return result;
};

const joinSubmission = async (
  id: string,
  studentId: string
): Promise<ISubmission | null> => {
  const isExist = await Submission.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Submission not found !');
  }

  const user = await User.findById(studentId);
  if (!user || user.role !== USER_ROLE.STUDENT) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const updatedSubmissionData: any = {
    $addToSet: { student: studentId },
  };

  const result = await Submission.findByIdAndUpdate(id, updatedSubmissionData, {
    new: true,
  })
  return result;
};

const getAllSubmissiones = async (userId: string): Promise<ISubmission[]> => {
  // const user = await User.findById(userId);
  // if (!user) {
  //   throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  // }
  const filteredSubmissiones = await Submission.find()
  return filteredSubmissiones;
};

const getSingleSubmission = async (id: string): Promise<ISubmission | null> => {
  const selectedSubmission = await Submission.findById(id).populate('teacher');
  if (selectedSubmission) {
    return selectedSubmission;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Submission not found !');
  }
};

const deleteSingleSubmission = async (id: string): Promise<ISubmission | null> => {
  const _class = await Submission.findByIdAndDelete(id);
  if (_class) {
    return _class;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Submission not found !');
  }
};

export const SubmissionService = {
  createSubmission,
  joinSubmission,
  updateSubmission,
  getAllSubmissiones,
  getSingleSubmission,
  deleteSingleSubmission,
};
