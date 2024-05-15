import React, { useEffect, useState } from "react";
import { Box, Grid, TextField, IconButton, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { ISubmission } from "../../CourseDetails";
import assignmentSubmissionsService from "../../../../../../services/assignmentSubmissions";
import { toast } from "react-toastify";

type Props = {
  submission: string;
};

const validationSchema = yup.object().shape({
  feedback: yup.string().required("Feedback is required"),
  marks: yup.number().required("Marks are required").min(0, "Marks cannot be negative"),
});

const SubmittedSingleSubmissions = (props: Props) => {
  const { submission } = props;
  const [submissionDetails, setSubmissionDetails] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await assignmentSubmissionsService.getById(submission);
        setSubmissionDetails(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [submission]);

  const handleFormSubmit = async (values: { feedback: string; marks: number }) => {
    try {
      const result = await assignmentSubmissionsService.update(submission, values);
      setSubmissionDetails(result.data.data);
      setIsEditing(false);
      toast.success("Submission updated successfully!");
    } catch (error) {
      console.error("Error updating submission:", error);
      toast.error("Failed to update submission");
    }
  };

  if (!submissionDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      {!isEditing ? (
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <strong>{submissionDetails.student.name.firstName} {submissionDetails.student.name.lastName}</strong>
          </Grid>
          <Grid item xs={4}>
            {submissionDetails.content}
          </Grid>
          <Grid item xs={2}>
            {submissionDetails.marks}
          </Grid>
          <Grid item xs={3}>
            {submissionDetails.feedback}
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      ) : (
        <Formik
          initialValues={{
            feedback: submissionDetails.feedback || "",
            marks: submissionDetails.marks || 0,
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={2}>
                  <strong>{submissionDetails.student.name.firstName} {submissionDetails.student.name.lastName}</strong>
                </Grid>
                <Grid item xs={4}>
                  {submissionDetails.content}
                </Grid>
                <Grid item xs={2}>
                  <Field
                    name="marks"
                    as={TextField}
                    type="number"
                    error={touched.marks && !!errors.marks}
                    helperText={touched.marks && errors.marks}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="feedback"
                    as={TextField}
                    error={touched.feedback && !!errors.feedback}
                    helperText={touched.feedback && errors.feedback}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton type="submit">
                    <SaveIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default SubmittedSingleSubmissions;
