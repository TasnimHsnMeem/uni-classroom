import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import assignmentService from "../../../../../services/assignment";
import assignmentSubmissionsService from "../../../../../services/assignmentSubmissions";
import { IAssignment } from "../CourseDetails";
import {
  Box,
  Typography,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button as MuiButton,
  Divider,
  Button,
} from "@mui/material";
import AddSubmissions from "./Submissions/AddSubmissions";
import SubmissionsList from "./Submissions/SubmissionsList";
import { useAppSelector } from "../../../../../redux/store";
import { userRoles } from "../../../../../constants/user";
import ConfirmationModal from "../../../../common/modal/confirmationModal/ConfirmationModal";
import DeleteIcon from "@mui/icons-material/Delete";
import config from "../../../../../config";

type Props = {
  assignmentId: string;
};

const AssignmentSingle = (props: Props) => {
  const { assignmentId } = props;
  const { id: courseId } = useParams<{ id: string }>();
  const { _id, role } = useAppSelector((state) => state.auth.profileData.user);
  const [showConfirmationModal, setShowConfirmationModal] =
    React.useState(false);
  const [assignment, setAssignment] = React.useState<any>();
  const [checkIfAlreadySubmitted, setCheckIfAlreadySubmitted] =
    React.useState<boolean>(false);
  const [evaluatedResult, setEvaluatedResult] = React.useState<any>(false);

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

  const handleDelete = async () => {
    try {
      await assignmentService.delete(assignmentId, courseId!);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [assignmentId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        backgroundColor: "#f0f2f5",
      }}
    >
      {assignment ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            padding: 4,
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: 3,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: 2,
              marginBottom: 2,
            }}
          >
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
              {assignment.title}
            </Typography>
            {role === userRoles.TEACHER && (
              <IconButton
                color="error"
                onClick={() => setShowConfirmationModal(true)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
          <Typography variant="body1" component="p" sx={{ marginBottom: 3 }}>
            {assignment.content}
          </Typography>
          {assignment.files?.length > 0 && (
            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Files:
              </Typography>
              <List>
                {assignment.files.map((file: string, index: number) => (
                  <ListItem key={index} disableGutters>
                    <MuiButton
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => window.open(`${config.assetUrl}${file}`, '_blank')}
                    >
                      {file}
                    </MuiButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ marginY: 2 }} />
            </Box>
          )}
          {checkIfAlreadySubmitted ? (
            evaluatedResult.marks ? (
              <SubmissionsList submissions={[evaluatedResult.id]} />
            ) : (
              <Typography variant="body1" color="textSecondary">
                Already Submitted, pending for evaluation
              </Typography>
            )
          ) : role === userRoles.STUDENT ? (
            <AddSubmissions assignmentId={assignmentId} refetch={getData} />
          ) : null}
          {role === userRoles.TEACHER && (
            <SubmissionsList submissions={assignment.submissions} />
          )}
          <ConfirmationModal
            open={showConfirmationModal}
            onConfirm={handleDelete}
            submitText="Delete"
            description="Are you sure you want to delete this assignment?"
            onClose={() => setShowConfirmationModal(false)}
          />
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default AssignmentSingle;
