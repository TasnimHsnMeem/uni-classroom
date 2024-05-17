import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { setLoadingAction } from "../../../../../redux/utils/actions";
import RoutingList from "../../../../../utils/RoutingList";
import Button from "../../../../common/Button";
import UserCourseTitleAndInput from "../../addCourse/UserCourseTitileAndInput";

import assignmentService from "../../../../../services/assignment";
import {
  courseWorkValidationSchema,
  noticeValidationSchema,
} from "../../utils";
import courseService from "../../../../../services/course";
import { userRoles } from "../../../../../constants/user";

const CreateNotice = () => {
  const { role } = useAppSelector((state) => state.auth.profileData.user);
  const [initData, setInitData] = useState({
    notice: "",
  });

  const { id: courseId } = useParams();
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const saveHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };
      dispatch(setLoadingAction(true));
      let res: any;

      res = await courseService.update(courseId!, { ...validValues });
      getCourse();
      dispatch(setLoadingAction(false));
      toast.success("Notice updated successfully");
      // navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  const getCourse = async () => {
    dispatch(setLoadingAction(true));
    try {
      const res = await courseService.getById(courseId!);
      dispatch(setLoadingAction(false));
      if (res.data) {
        setInitData((prev) => ({ ...prev, notice: res.data.data.notice }));
      }
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      <Box>
        <Formik
          enableReinitialize={true}
          validationSchema={noticeValidationSchema}
          initialValues={initData}
          // validateOnChange={false}
          onSubmit={(
            values,
            {
              setSubmitting,
              validateForm,
              setFieldError,
              setErrors,
              setTouched,
            }
          ) => {
            saveHandler(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldTouched,
            setFieldValue,
          }) => (
            <Form>
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} md={8}>
                  <UserCourseTitleAndInput
                    title="Notice*"
                    name="notice"
                    placeholder="Notice"
                    disabled={
                      ![userRoles.TEACHER, userRoles.ADMIN].includes(role)
                    }
                  />
                  {[userRoles.TEACHER, userRoles.ADMIN].includes(role) && (
                    <Box
                      className="d-flex align-items-center justify-content-between"
                      style={{ marginTop: "25px" }}
                    >
                      <div></div>
                      <Box className="d-flex align-items-center">
                        <Button color="alert" type="submit">
                          Publish Notice
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>{" "}
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default CreateNotice;
