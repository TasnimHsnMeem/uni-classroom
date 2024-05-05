import { FC } from "react";
import { toast } from "react-toastify";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikValues } from "formik";

import SettingsSteps from "./SettingsSteps";
import ProfileEditForm from "./ProfileEditForm";
import ProfileEditFooter from "./ProfileEditFooter";
import ProfileEditStepTitle from "./ProfileEditStepTitle";

import userService from "../../../../services/user";
import RoutingList from "../../../../utils/RoutingList";

import { profileEditValidationSchema } from "./utils";
import { setLoadingAction } from "../../../../redux/utils/actions";
import { RootState, useAppDispatch } from "../../../../redux/store";
import { setUserProfileAction } from "../../../../redux/auth/action";
import styles from "../Settings.module.scss";

const ProfileEdit: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth.profileData);

  const initData = {
    name: user.name,
    email: user.email,
    phone: user.phoneNumber,
  };

  const saveHandler = async (values: FormikValues) => {
    try {
      dispatch(setLoadingAction(true));
      const res = await userService.update(user._id, values); // Access the _id property correctly
      const userData = await userService.getLoggedInUserData();
      dispatch(setUserProfileAction({ user: userData.data.data }));
      toast.success(res?.data?.msg);
      dispatch(setLoadingAction(false));
      navigate(RoutingList.settings.index);
    } catch (err: any) {
      toast.error(err.response.data.msg);
      dispatch(setLoadingAction(false));
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={profileEditValidationSchema}
      // validateOnChange={false}
      onSubmit={(values, { setSubmitting, validateForm, setErrors }) => {
        setSubmitting(true);
        saveHandler(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <Box className={styles.settingsPage}>
          <SettingsSteps />
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={8}>
              <ProfileEditStepTitle title="Profile Info" />
              <ProfileEditForm />
            </Grid>
          </Grid>
          <ProfileEditFooter />
        </Box>
      </Form>
    </Formik>
  );
};

export default ProfileEdit;
