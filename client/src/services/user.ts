import { FormikValues } from "formik";
import http from "../utils/http";

import config from "./../config";

/**
 * create a user
 */
const create = async (values: FormikValues) => {
  const url = `${config.baseUrl}${config.endPoints.user.addUser}`;
  return http.post(url, values);
};

const get = async (
  pageNo: number,
  pageSize: number,
  filterInfo?: {  }
) => {
  const url = `${config.baseUrl}${config.endPoints.user.searchUsers(
    pageNo,
    pageSize
  )}`;
  return http.get(url, filterInfo);
};

const getById = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.user.getById(id)}`;
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
  return http.patch(url, body);
};

const deleteUser = async (id: string) => {
  const url = `${config.baseUrl}${config.endPoints.user.delete(id)}`;
  return http.delete(url);
};

const getLoggedInUserData = async () => {
  const url = `${config.baseUrl}${config.endPoints.user.getMe}`;
  return http.get(url);
};

const changePassword = async (updatedInfo: {
  oldPass: string;
  newPass: string;
}) => {
  const url = `${config.baseUrl}${config.endPoints.user.changePassword}`;
  return http.patch(url, updatedInfo);
};

const verify = async (newUserInfo: { token: string; newPass?: string }) => {
  const url = `${config.baseUrl}${config.endPoints.user.verify}`;
  return http.post(url, newUserInfo);
};

const userService = {
  get,
  getById,
  create,
  delete: deleteUser,
  update,
  verify,
  changePassword,
  getLoggedInUserData,
};

export default userService;
