
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiErrors';
import AdminNotice from './adminNotice.model';
import { IAdminNotice } from './adminNotice.interface';
import Course from '../course/course.model';

const createAdminNotice = async (courseId: string, adminNotice: IAdminNotice): Promise<IAdminNotice | null> => {
  const newAdminNotice = (await AdminNotice.create(adminNotice))
  return await Course.findByIdAndUpdate(courseId, { $push: { AdminNotice: newAdminNotice._id } })
};

const updateAdminNotice = async (
  id: string,
  payload: Partial<IAdminNotice>
): Promise<IAdminNotice | null> => {
  const isExist = await AdminNotice.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'AdminNotice not found !');
  }

  const { ...adminNoticeData } = payload;

  const updatedAdminNoticeData: Partial<IAdminNotice> = { ...adminNoticeData };
  const result = await AdminNotice.findByIdAndUpdate(id, updatedAdminNoticeData, {
    new: true,
  })
  return result;
};

const getAllAdminNotices = async (): Promise<IAdminNotice[]> => {
  const allAdminNotices = await AdminNotice.find();
  return allAdminNotices;
};

const getSingleAdminNotice = async (id: string): Promise<IAdminNotice | null> => {
  const selectedAdminNotice = await AdminNotice.findById(id);
  if (selectedAdminNotice) {
    return selectedAdminNotice;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'AdminNotice not found !');
  }
};

const deleteSingleAdminNotice = async (id: string): Promise<IAdminNotice | null> => {
  const _AdminNotice = await AdminNotice.findByIdAndDelete(id);
  if (_AdminNotice) {
    return _AdminNotice;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, 'AdminNotice not found !');
  }
};


export const AdminNoticeService = {
  createAdminNotice,
  updateAdminNotice,
  getAllAdminNotices,
  getSingleAdminNotice,
  deleteSingleAdminNotice,
};
