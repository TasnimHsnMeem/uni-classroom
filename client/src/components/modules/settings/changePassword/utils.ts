import * as yup from "yup";

export const changePasswordInitData = {
    password: "",
    newPassword: "",
    confirmPassword: ""
}

export const changePasswordValidationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    newPassword: yup.string().required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords must match with the new password")
      .required("Confirm Password is required"),
  
})
