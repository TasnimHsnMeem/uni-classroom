import { ContentPaste, Lock } from "@mui/icons-material";
import * as yup from "yup";
import { userRoles } from "../../../constants/user";

export const courseCreationStepsInfo = [
  { icon: ContentPaste, title: "Course details" },
];

export const courseEditStepsInfo = [
  { icon: ContentPaste, title: "Course details" },
];

export const courseCreateInitData = {
  name: "",
  post: [],
  teacher: "",
  student: [],
  notice: "",
  assignments: [],
};

const courseCreationValidationFirstStep = {
  name: yup.string().required("Name is required")
};

export const courseCreationValidationSchema = [
  yup.object().shape({ ...courseCreationValidationFirstStep }),
];


export const courseWorkValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  files: yup.array().of(yup.string()),
});

export const submissionValidationSchema = yup.object().shape({
  title: yup.string(),
  content: yup.string().required("Content is required"),
  marks: yup.number().nullable(),
  feedback: yup.string(),
  student: yup.string().required("Student is required"),
});

export const noticeValidationSchema = yup.object().shape({
  notice: yup.string().required("Notice is required"),
});