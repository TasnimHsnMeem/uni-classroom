import React from "react";
import CreateAssignment from "./CreateAssignment";
import AssignmentAll from "./AssignmentAll";

type Props = {};

const Assignment = (props: Props) => {
  return (
    <div>
      <CreateAssignment />
      <AssignmentAll />
    </div>
  );
};

export default Assignment;
