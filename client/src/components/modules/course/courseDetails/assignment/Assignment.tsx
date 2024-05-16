import React from "react";
import CreateAssignment from "./CreateAssignment";
import AssignmentAll from "./AssignmentAll";
import { useAppSelector } from "../../../../../redux/store";
import { userRoles } from "../../../../../constants/user";

type Props = {};

const Assignment = (props: Props) => {
  const { _id , role } = useAppSelector((state) => state.auth.profileData.user);

  return (
    <div >
      {[userRoles.TEACHER, userRoles.ADMIN].includes(role) && <CreateAssignment />}
      <AssignmentAll />
    </div>
  );
};

export default Assignment;
