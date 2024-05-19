
const BASE_URL = "http://localhost:5000/api/v1";
const ASSET_URL = "http://localhost:5000/"

// const BASE_URL = "https://mu-web-server-9f8c1f066ac0.herokuapp.com/api/v1";
// const ASSET_URL = "https://mu-web-server-9f8c1f066ac0.herokuapp.com/"
const AUTH_URL = "";

const config = {
  baseUrl: BASE_URL,
  authUrl: BASE_URL ,
  assetUrl: ASSET_URL,
  endPoints: {
    patient: {
      add: "/patient",
      update: (id: string) => `/patient/${id}`,
      delete: (id: string) => `/patient/${id}`,
      getById: (id: string) => `/patient/${id}`,
      search: (pageNo: number, pageSize: number) =>
        `/patient/search?page=${pageNo + 1}&perPage=${pageSize}`,
      getFilter: `/patient/get-filters`,
      canUpdate: (submittedAt: string) =>
        `/patient/canupdate?submittedAt=${submittedAt}`,
      exportCSV: (type: string, from: string, to: string) =>
        `/patient/report?type=${type}&from=${from}&to=${to}`,
    },
    disease: {
      getAll: "/disease",
      add: `/disease/`,
      update: (id: string) => `/disease/${id}`,
      delete: (id: string) => `/disease/${id}`,
      getById: (id: string) => `/disease/${id}`,
    },
    department: {
      getAll: "/department",
      add: `/department/`,
      update: (id: string) => `/department/${id}`,
      delete: (id: string) => `/department/${id}`,
      getById: (id: string) => `/department/${id}`,
    },
    user: {
      addUser: "/auth/signup",
      searchUsers: (pageNo: number, pageSize: number) =>
        `/users`,
      update: (id: string) => `/users/${id}`,
      delete: (id: string) => `/users/${id}`,
      getMe: `/users/me`,
      getById: (id: string) => `/users/${id}`,
      changePassword: `/users/update-password`,
      verify: `/users/verify-link`,
    },
    course: {
      index: "/course",
      getById: (id: string) => `/course/${id}`,
      join: (id: string) => `/course/join/${id}`,
    },
    post: {
      index: "/post",
      getById: (id: string) => `/post/${id}`,
      upload: `/post/upload`,
    },
    assignment: {
      index: "/assignment",
      getById: (assignmentId: string) => `/assignment/${assignmentId}`,
    },
    adminNotice: {
      index: "/adminNotice",
      getById: (noticeId: string) => `/adminNotice/${noticeId}`,
    },
    submission: {
      index: "/submission",
      getById: (submissionId: string) => `/submission/${submissionId}`,
      getSubmissionByUserId: (assignmentId: string, userId: string) =>
        `/submission/studentsAllSubmission/${assignmentId}/${userId}`,
    },
    utils: {
      fileUpload: (type: string) => `/utils/upload?type=${type}`,
      deleteFile: `/utils/upload`,
    },
    auth: {
      login: "/auth/login",
    },
  },
};

export default config;
