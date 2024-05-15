import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import { ISubmission } from './submission.interface';
import Submission from './submission.model';
import Assignment from '../assignment/assignment.model';

const createSubmission = async (assignmentId: string, submission: ISubmission): Promise<ISubmission | null> => {
  try {
    // Create the new submission
    const newSubmission = await Submission.create(submission);

    if (!newSubmission) {
      throw new Error('Submission creation failed');
    }

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      throw new Error('Assignment not found');
    }

    // Update the assignment with the new submission ID
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { $addToSet: { submissions: newSubmission._id } },
      { new: true }
    );

    if (!updatedAssignment) {
      throw new Error('Assignment update failed');
    }

    // Log updated assignment details
    console.log('Updated Assignment:', updatedAssignment);

    return newSubmission;
  } catch (error) {
    console.error('Error in createSubmission:', error);
    throw error;
  }
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
    .populate('student')
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
  const selectedSubmission = await Submission.findById(id).populate('student');
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
  updateSubmission,
  getAllSubmissiones,
  getSingleSubmission,
  deleteSingleSubmission,
};
