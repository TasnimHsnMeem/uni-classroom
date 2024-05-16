import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import SettingsSteps from "../profileEdit/SettingsSteps";
import ProfileEditFooter from "../profileEdit/ProfileEditFooter";
import ProfileEditStepTitle from "../profileEdit/ProfileEditStepTitle";

import userService from "../../../../services/user";
import RoutingList from "../../../../utils/RoutingList";

import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import ChangePasswordFromSection from "./ChangePasswordFromSection";
import {
  changePasswordInitData,
  changePasswordValidationSchema
} from "./utils";
import styles from "../Settings.module.scss";

const ChangePassword: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const saveHandler = async (values: FormikValues) => {
    try {
      const updatedInfo = {
        oldPass: values.password,
        newPass: values.newPassword,
      };
      dispatch(setLoadingAction(true));
      const res = await userService.changePassword(updatedInfo);
      dispatch(setLoadingAction(false));
      toast.success("Success");
      navigate(RoutingList.settings.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err?.response?.data?.msg);
    }
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={changePasswordInitData}
      validationSchema={changePasswordValidationSchema}
      onSubmit={(values, { setSubmitting, validateForm, setErrors }) => {
        setSubmitting(true);
        saveHandler(values);
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue, resetForm, handleChange, handleSubmit }) => (
        <Form>
          <Box className={styles.settingsPage}>
            <SettingsSteps />
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} md={8}>
                <ProfileEditStepTitle title="Change Password" />
                <ChangePasswordFromSection />
              </Grid>
            </Grid>
            <ProfileEditFooter />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassword;
