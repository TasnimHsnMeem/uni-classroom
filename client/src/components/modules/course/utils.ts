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

const userCreationValidationFirstStep = {
  name: yup.string().required("Name is required")
};

export const userCreationValidationSchema = [
  yup.object().shape({ ...userCreationValidationFirstStep }),
];
