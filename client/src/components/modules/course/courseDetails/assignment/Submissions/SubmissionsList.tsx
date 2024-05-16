import React from "react";
import { ISubmission } from "../../CourseDetails";
import SubmittedSingleSubmissions from "./SubmittedSingleSubmissions";
import { Box, Grid } from "@mui/material";

type Props = {
  submissions: string[];
};

const SubmissionsList = (props: Props) => {
  const { submissions } = props;

  return (
    <div>
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <p>Student Name</p>
          </Grid>
          <Grid item xs={4}>
            <p>Content</p>
          </Grid>
          <Grid item xs={2}>
            <p>Marks</p>
          </Grid>
          <Grid item xs={3}>
            <p>Feedback</p>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
    </Box>
      {submissions.map((submission) => (
        <SubmittedSingleSubmissions key={Math.random()} submission={submission}/>
      ))}
    </div>
  );
};

export default SubmissionsList;
