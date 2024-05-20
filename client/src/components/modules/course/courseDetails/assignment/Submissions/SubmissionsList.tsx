import React from "react";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import SubmittedSingleSubmissions from "./SubmittedSingleSubmissions";

type Props = {
  submissions: string[];
};

const SubmissionsList = (props: Props) => {
  const { submissions } = props;

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Student Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Content
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Marks
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                Feedback
              </Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission) => (
            <SubmittedSingleSubmissions key={submission} submission={submission} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SubmissionsList;
