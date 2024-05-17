import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../../../../redux/store";
import { setLoadingAction } from "../../../../../redux/utils/actions";
import RoutingList from "../../../../../utils/RoutingList";
import Button from "../../../../common/Button";
import UserCourseTitleAndInput from "../../addCourse/UserCourseTitileAndInput";

import assignmentService from "../../../../../services/assignment";
import { courseWorkValidationSchema } from "../../utils";


interface Props {
  saveAssignmentHandler: (values: FormikValues) => void;
}

const CreateAssignment: FC<Props> = (props) => {
  const { saveAssignmentHandler } = props;

  const [initData] = useState({
    title: "",
    content: "",
    submissions: [],
  });

  

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
              resetForm
            }
          ) => {
            resetForm();
            saveAssignmentHandler(values);
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
                    placeholder="Assignment Title"
                  />
                  <UserCourseTitleAndInput
                    title="Description*"
                    name="content"
                    placeholder="Content"
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

export default CreateAssignment;
