import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import assignmentService from "../../../../../services/assignment";
import { IAssignment } from "../CourseDetails";
import { Box, Typography, CircularProgress } from "@mui/material";
import AddSubmissions from "./Submissions/AddSubmissions";
import SubmissionsList from "./Submissions/SubmissionsList";
import { useAppSelector } from "../../../../../redux/store";
import { userRoles } from "../../../../../constants/user";
import assignmentSubmissionsService from "../../../../../services/assignmentSubmissions";

type Props = {
  assignmentId: string;
};

const AssignmentSingle = (props: Props) => {
  const { assignmentId } = props;
  const { _id, role } = useAppSelector((state) => state.auth.profileData.user);

  const [assignment, setAssignment] = React.useState<any>();
  const [checkIfAlreadySubmitted, setCheckIfAlreadySubmitted] =
    React.useState<boolean>(false);
  const [evaluatedResult, setEvaluatedResult] = React.useState<any>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await assignmentService.getById(assignmentId!);
        const submissionsResultForUser =
          await assignmentSubmissionsService.getStudentsAllSubmission(
            assignmentId,
            _id
          );
        if (submissionsResultForUser.data.data.length > 0) {
          setCheckIfAlreadySubmitted(true);
          setEvaluatedResult(submissionsResultForUser.data.data[0]);
        }
        setAssignment(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [assignmentId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      {assignment ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            padding: 2,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {assignment.title}
          </Typography>
          <Typography variant="body1" component="p">
            {assignment.content}
          </Typography>
          {checkIfAlreadySubmitted ? (
            evaluatedResult.marks ? (
              <SubmissionsList submissions={[evaluatedResult.id]} />
            ) : (
              <p>Already Submitted, pending for evaluation</p>
            )
          ) : role === userRoles.STUDENT ? (
            <AddSubmissions assignmentId={assignmentId} />
          ) : null}

          {role === userRoles.TEACHER && (
            <SubmissionsList submissions={assignment.submissions} />
          )}
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default AssignmentSingle;
