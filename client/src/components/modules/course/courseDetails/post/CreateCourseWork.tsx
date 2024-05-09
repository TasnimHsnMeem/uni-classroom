import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../../../../redux/store";
import { setLoadingAction } from "../../../../../redux/utils/actions";
import postService from "../../../../../services/post";
import RoutingList from "../../../../../utils/RoutingList";
import Button from "../../../../common/Button";
import UserCourseTitleAndInput from "../../addCourse/UserCourseTitileAndInput";

import styles from "../../styles/styles.module.scss";
import { courseWorkValidationSchema } from "../../utils";
const CreateCourseWork = () => {
  const [initData] = useState({
    title: "",
    content: "",
    files: [],
  });

  const { id } = useParams();
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const saveHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };

      // for (const key of Object.keys(validValues)) {
      //   if (!validValues[key]) {
      //     delete validValues[key];
      //   }
      // }
      dispatch(setLoadingAction(true));
      let res: any;

      res = await postService.create(id!, { ...validValues });
      dispatch(setLoadingAction(false));
      toast.success(res.data.msg);
      navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  return (
    <>
      <Box>
        <Formik
          // enableReinitialize={true}
          validationSchema={courseWorkValidationSchema}
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
                    title="Title*"
                    name="title"
                    placeholder="Coursework Title"
                  />
                  <UserCourseTitleAndInput
                    title="Description*"
                    name="content"
                    placeholder="Content"
                  />
                  <h5 className={styles.h5}>File Upload</h5>
                  <input
                    type="file"
                    name="files"
                    multiple
                    onChange={async (event) => {
                      if (event.target.files) {
                        const files = Array.from(event.target.files);
                        const fileData = await Promise.all(
                          files.map(async (file) => {
                            const res = await postService.upload(file);
                            return res.data.data;
                          })
                        );
                        setFieldValue("files", fileData);
                      }
                    }}
                    className="form-control"
                  />
                  <Box
                    className="d-flex align-items-center justify-content-between"
                    style={{ marginTop: "25px" }}
                  >
                    <Button
                      color="default"
                      type="button"
                      // onClick={handleBackStep}
                    >
                      Back
                    </Button>
                    <Box className="d-flex align-items-center">
                      <Button
                        className="mg-r-10"
                        type="button"
                        // onClick={handleCancelClick}
                      >
                        {/* {draftFunction && steps === stepsInfo.length - 1
                          ? "Save Draft"
                          : "Cancel"} */}
                        Cancel
                      </Button>
                      <Button color="alert" type="submit">
                        {/* {steps === stepsInfo?.length - 1 ? "Submit" : "Next"} */}
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>{" "}
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default CreateCourseWork;
