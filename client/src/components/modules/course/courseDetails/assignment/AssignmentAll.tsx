import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import assignmentService from "../../../../../services/assignment";
import { IAssignment, ICourse } from "../CourseDetails";
import courseService from "../../../../../services/course";
import AssignmentSingle from "./AssignmentSingle";
import styles from "./styles.module.scss";
import { Box, Divider, Typography } from "@mui/material";
import assignmentSubmissionsService from "../../../../../services/assignmentSubmissions";
import { useAppSelector } from "../../../../../redux/store";

type Props = {};

const AssignmentAll = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { _id } = useAppSelector((state) => state.auth.profileData.user);
  const [course, setCourse] = React.useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        if (id && _id) {
          const result = await courseService.getById(id!);
          setCourse(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id, _id]);
  return (
    <div>
      <Divider
        sx={{
          margin: "20px 0",
        }}
      />
      <div className="text-center">
        <Typography variant="h4" component="h1" gutterBottom>
          All Assessment
        </Typography>
      </div>
      <Divider
        sx={{
          margin: "20px 0",
        }}
      />
      {course?.assignments?.map((assignment: string) => (
        <div key={Math.random()}>
          <AssignmentSingle assignmentId={assignment} />
        </div>
      ))}
    </div>
  );
};

export default AssignmentAll;
