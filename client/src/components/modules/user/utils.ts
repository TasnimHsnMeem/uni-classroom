import { ContentPaste, Lock } from "@mui/icons-material";
import * as yup from "yup";
import { userRoles } from "../../../constants/user";

export const userCreationStepsInfo = [
  { icon: ContentPaste, title: "User Details and Roles" },
  { icon: Lock, title: "Password" },
];

export const userEditStepsInfo = [
  { icon: ContentPaste, title: "User Details and Roles" },
];

export const userCreateInitData = {
  password: "",
  confirmPassword: "",
  role: "",
  name: {
    firstName: "",
    lastName: "",
  },
  phoneNumber: "",
  email: "",
  address: "",
  courses: [],
};

const userCreationValidationFirstStep = {
  role: yup.string().required("Role is required"),
  name: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  }),
  address: yup.string().required("Address is required"),
  email: yup.string().required("Email is required"),
  phoneNumber: yup.string().required("Phone is required"),
};

export const userCreationValidationSchema = [
  yup.object().shape({ ...userCreationValidationFirstStep }),
  yup.object().shape({
    ...userCreationValidationFirstStep,
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  }),
];
