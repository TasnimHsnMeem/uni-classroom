import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import Assignment from './assignment.model';
import { IAssignment } from './assignment.interface';
import Course from '../course/course.model';

const createAssignment = async (
  courseId: string,
  assignmentData: IAssignment
): Promise<IAssignment | null> => {
  const assignment = await Assignment.create(assignmentData);
  await Course.findByIdAndUpdate(courseId, {
    $push: { assignments: assignment._id },
  });

  return assignment;
};

const updateAssignment = async (
  id: string,
  payload: Partial<IAssignment>
): Promise<IAssignment | null> => {
  const isExist = await Assignment.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found !');
  }

  const { ...AssignmentData } = payload;

  const updatedAssignmentData: Partial<IAssignment> = { ...AssignmentData };
  const result = await Assignment.findByIdAndUpdate(id, updatedAssignmentData, {
    new: true,
  });
  return result;
};

const getAllAssignments = async (): Promise<IAssignment[]> => {
  const allAssignmentes = await Assignment.find();
  return allAssignmentes;
};

const getSingleAssignment = async (id: string): Promise<IAssignment | null> => {
  const selectedAssignment = await Assignment.findById(id);
  if (selectedAssignment) {
    return selectedAssignment;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found !');
  }
};

const deleteSingleAssignment = async (
  id: string,
  courseId: string
): Promise<IAssignment | null> => {
  const _Assignment = await Assignment.findByIdAndDelete(id);
  if (_Assignment) {
    await Course.findByIdAndUpdate(courseId, {
      $pull: { assignments: id },
    });
    return _Assignment;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found!');
  }
};


export const AssignmentService = {
  createAssignment,
  updateAssignment,
  getAllAssignments,
  getSingleAssignment,
  deleteSingleAssignment,
};
