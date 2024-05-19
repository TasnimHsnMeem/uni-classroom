import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/store";
import { setLoadingAction } from "../../../../../../redux/utils/actions";
import RoutingList from "../../../../../../utils/RoutingList";
import Button from "../../../../../common/Button";
import assignmentSubmissionsService from "../../../../../../services/assignmentSubmissions";
import { courseWorkValidationSchema, submissionValidationSchema } from "../../../utils";
import postService from "../../../../../../services/post";
import assignmentService from "../../../../../../services/assignment";

const AddSubmissions = ({assignmentId, refetch}: {assignmentId: string, refetch: () => Promise<void>}) => {
  const { _id } = useAppSelector((state) => state.auth.profileData.user);

  const initData = useMemo<FormikValues>(
    () => ({
      content: "",
      student: _id || "",
    }),
    [_id]
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const saveHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };
      dispatch(setLoadingAction(true));
      const res = await assignmentSubmissionsService.create(assignmentId, validValues);
      refetch()
      dispatch(setLoadingAction(false));
      toast.success("Success");
      // navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  if (!_id) return null;

  return (
    <Box>
      <Formik
        enableReinitialize={true}
        validationSchema={submissionValidationSchema}
        initialValues={initData}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          console.log("onSubmit called with values:", values); // Debug log
          saveHandler(values);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item xs={12} md={8}>
                <input
                  type="file"
                  name="file"
                  onChange={async (event) => {
                    if (event.target.files && event.target.files[0]) {
                      const file = event.target.files[0];
                      console.log("Uploading file:", file); // Debug log
                      const res = await postService.upload(file);
                      console.log("File uploaded, response:", res.data.data); // Debug log
                      setFieldValue("content", res.data.data);
                    }
                  }}
                  className="form-control"
                />
                <Box
                  className="d-flex align-items-center justify-content-between"
                  style={{ marginTop: "25px" }}
                >
                  <Button color="default" type="button">
                    Back
                  </Button>
                  <Box className="d-flex align-items-center">
                    <Button className="mg-r-10" type="button">
                      Cancel
                    </Button>
                    <Button color="alert" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddSubmissions;
