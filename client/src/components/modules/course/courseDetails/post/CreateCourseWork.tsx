import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikState, FormikValues } from "formik";
import { FC, useRef, useState } from "react";

import postService from "../../../../../services/post";
import Button from "../../../../common/Button";
import UserCourseTitleAndInput from "../../addCourse/UserCourseTitileAndInput";

import styles from "../../../styles/styles.module.scss";
import { courseWorkValidationSchema } from "../../utils";

interface Props {
  saveCourseWorkHandler: (values: FormikValues) => Promise<void>;
}

const CreateCourseWork: FC<Props> = (props) => {
  const { saveCourseWorkHandler } = props;
  const [initData] = useState({
    title: "",
    content: "",
    files: [],
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

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
              resetForm,
            }
          ) => {
            saveCourseWorkHandler(values).then(() => {
              resetForm({
                title: "",
                content: "",
                files: [],
              } as Partial<
                FormikState<{ title: string; content: string; files: never[] }>
              >);
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
              setSubmitting(false);
            });
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
                    ref={fileInputRef}
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
