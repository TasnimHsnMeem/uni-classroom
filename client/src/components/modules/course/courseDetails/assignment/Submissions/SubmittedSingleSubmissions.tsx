import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableCell,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import assignmentSubmissionsService from "../../../../../../services/assignmentSubmissions";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../../../../redux/store";
import { userRoles } from "../../../../../../constants/user";
import config from "../../../../../../config";

type Props = {
  submission: string;
};

const validationSchema = yup.object().shape({
  feedback: yup.string().required("Feedback is required"),
  marks: yup
    .number()
    .required("Marks are required")
    .min(0, "Marks cannot be negative"),
});

const SubmittedSingleSubmissions = (props: Props) => {
  const { submission } = props;
  const { role } = useAppSelector((state) => state.auth.profileData.user);
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

  const handleFormSubmit = async (values: {
    feedback: string;
    marks: number;
  }) => {
    try {
      const result = await assignmentSubmissionsService.update(
        submission,
        values
      );
      setSubmissionDetails(result.data.data);
      setIsEditing(false);
      toast.success("Submission updated successfully!");
    } catch (error) {
      console.error("Error updating submission:", error);
      toast.error("Failed to update submission");
    }
  };

  if (!submissionDetails) {
    return (
      <TableRow>
        <TableCell colSpan={5}>Loading...</TableCell>
      </TableRow>
    );
  }

  return (
    <Formik
      initialValues={{
        feedback: submissionDetails.feedback || "",
        marks: submissionDetails.marks || 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched, handleSubmit }) => (
        <TableRow>
          <TableCell>
            <strong>
              {submissionDetails.student.name.firstName}{" "}
              {submissionDetails.student.name.lastName}
            </strong>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="primary"
              href={`${config.assetUrl}${submissionDetails.content}`}
              key={submissionDetails.content}
              target="_blank"
              rel="noopener noreferrer"
            >
              File
            </Button>
          </TableCell>
          {isEditing ? (
            <>
              <TableCell>
                <Field
                  name="marks"
                  as={TextField}
                  type="number"
                  error={touched.marks && !!errors.marks}
                  helperText={touched.marks && errors.marks}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Field
                  name="feedback"
                  as={TextField}
                  error={touched.feedback && !!errors.feedback}
                  helperText={touched.feedback && errors.feedback}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                {/* <IconButton onSubmit={handleFormSubmit} onClick={handleSubmit}>
                  <SaveIcon />
                </IconButton> */}
                <IconButton
                  onClick={() => handleSubmit()}
                >
                  <SaveIcon />
                </IconButton>
              </TableCell>
            </>
          ) : (
            <>
              <TableCell>{submissionDetails.marks}</TableCell>
              <TableCell>{submissionDetails.feedback}</TableCell>
              <TableCell>
                {role === userRoles.TEACHER && (
                  <IconButton onClick={() => setIsEditing(true)}>
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
            </>
          )}
        </TableRow>
      )}
    </Formik>
  );
};

export default SubmittedSingleSubmissions;
