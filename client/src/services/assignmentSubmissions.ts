import { FormikValues } from "formik";
import http from "../utils/http";

import config from "../config";

const create = async (assignmentId: string, values: FormikValues) => {
  const url = `${config.baseUrl}${config.endPoints.submission.index}?assignmentId=${assignmentId}`;
  return http.post(url, values);
};

const get = async (
  pageNo: number,
  pageSize: number,
  filterInfo?: {  }
) => {
  const url = `${config.baseUrl}${config.endPoints.submission.index}`;
  return http.get(url, filterInfo);
};

const getById = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.submission.getById(id)}`;
  return http.get(url);
};

const update = async (
  id: string,
  body: {
    name?: string;
    phone?: string;
    email?: string;
    district?: string;
    password?: string;
    role?: string;
    town?: string;
  }
) => {
  const url = `${config.baseUrl}${config.endPoints.user.update(id)}`;
  return http.put(url, body);
};

const deleteCourse = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.submission.getById(id)}`;
  return http.delete(url);
};

const assignmentSubmissionsService = {
  get,
  getById,
  create,
  delete: deleteCourse,
  update,
};

export default assignmentSubmissionsService;
