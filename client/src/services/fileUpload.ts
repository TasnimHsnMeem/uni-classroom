import config from "../config";
import http from "../utils/http";

export const upload = async (file: FileList | Blob) => {
  const url = `${config.baseUrl}${config.endPoints.utils.fileUpload(
    "patient"
  )}`;
  return http.post(url, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteFile = async (body: { url: string }) => {
  const url = `${config.baseUrl}${config.endPoints.utils.deleteFile}`;
  return http.delete(url, { data: body });
};

const utilsService = {
  upload,
  deleteFile,
};

export default utilsService;
