import React from "react";
import { ISubmission } from "../../CourseDetails";
import SubmittedSingleSubmissions from "./SubmittedSingleSubmissions";

type Props = {
  submissions: string[];
};

const SubmissionsList = (props: Props) => {
  const { submissions } = props;

  return (
    <div>
      {submissions.map((submission) => (
        <SubmittedSingleSubmissions key={Math.random()} submission={submission}/>
      ))}
    </div>
  );
};

export default SubmissionsList;
