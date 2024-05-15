import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import assignmentService from "../../../../../services/assignment";
import { IAssignment } from "../CourseDetails";
import { Box, Typography, CircularProgress } from "@mui/material";
import AddSubmissions from "./Submissions/AddSubmissions";
import SubmissionsList from "./Submissions/SubmissionsList";

type Props = {
  assignmentId: string;
};

const AssignmentSingle = (props: Props) => {
  const { assignmentId } = props;

  const [assignment, setAssignment] = React.useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await assignmentService.getById(assignmentId!);
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
        padding: 2,
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
          <AddSubmissions assignmentId={assignmentId}/>
          <SubmissionsList submissions={assignment.submissions}/>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default AssignmentSingle;
