import { FormikValues } from "formik";
import http from "../utils/http";

import config from "../config";

const create = async (courseId: string, values: FormikValues) => {
  const url = `${config.baseUrl}${config.endPoints.adminNotice.index}?courseId=${courseId}`;
  return http.post(url, values);
};

const get = async (
  pageNo: number,
  pageSize: number,
  filterInfo?: {  }
) => {
  const url = `${config.baseUrl}${config.endPoints.adminNotice.index}`;
  return http.get(url, filterInfo);
};

const getById = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.adminNotice.getById(id)}`;
  return http.get(url);
};

const update = async (
  id: string,
  body: {
    [x: string]: any;
  }
) => {
  const url = `${config.baseUrl}${config.endPoints.adminNotice.getById(id)}`;
  return http.put(url, body);
};

const deleteAdminNotice = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.user.delete(id)}`;
  return http.delete(url);
};

const adminNoticeService = {
  get,
  getById,
  create,
  delete: deleteAdminNotice,
  update,
};

export default adminNoticeService;
