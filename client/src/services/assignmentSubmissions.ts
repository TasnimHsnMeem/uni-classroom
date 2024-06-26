import { FormikValues } from "formik";
import http from "../utils/http";

import config from "../config";

const create = async (assignmentId: string, values: FormikValues) => {
  const url = `${config.baseUrl}${config.endPoints.submission.index}?assignmentId=${assignmentId}`;
  return http.post(url, values);
};

const get = async (pageNo: number, pageSize: number, filterInfo?: {}) => {
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
    title?: string;
    content?: string;
    marks?: number;
    feedback?: string;
    student?: string;
  }
) => {
  const url = `${config.baseUrl}${config.endPoints.submission.getById(id)}`;
  return http.patch(url, body);
};

const deleteCourse = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.submission.getById(id)}`;
  return http.delete(url);
};


const getStudentsAllSubmission = async (assignmentId: string, userId: string) => {
  const url = `${config.baseUrl}${config.endPoints.submission.getSubmissionByUserId(assignmentId, userId)}`;
  return http.get(url);
}


const assignmentSubmissionsService = {
  get,
  getById,
  create,
  delete: deleteCourse,
  update,
  getStudentsAllSubmission
};

export default assignmentSubmissionsService;
