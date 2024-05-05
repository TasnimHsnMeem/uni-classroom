import * as yup from "yup";

export const loginInitialData = {
  email: "",
  password: "",
};

export const verifyAndChangePasswordInitialData = {
  newPass: "",
  confirmNewPass: "",
};

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const forgetPassSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const verifyChangePassValidationSchema = yup.object().shape({
  newPass: yup.string().required("Password is required"),
  confirmNewPass: yup
    .string()
    .oneOf([yup.ref("newPass")], "Passwords must match with the new password")
    .required("Confirm Password is required"),
});
