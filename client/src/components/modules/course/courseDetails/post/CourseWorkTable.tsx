import React, { useEffect, useState } from "react";
import { IPost } from "../CourseDetails";
import postService from "../../../../../services/post";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import config from "../../../../../config";

type Props = {
  posts: string[];
};

const CourseWorkTable = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post, index) => (
        <IndividualCourseWork key={post} courseId={post} />
      ))}
    </div>
  );
};

const IndividualCourseWork = ({ courseId }: { courseId: string }) => {
  const [course, setCourse] = useState<IPost>();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await postService.getById(courseId);
        setCourse(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <Box component={Paper} elevation={3} p={3} m={2}>
      <Typography variant="h4" gutterBottom>
        {course?.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {course?.content}
      </Typography>
      {course?.files && course?.files?.length > 0 && (
        <Box>
          Files:
          {course?.files.map((file, index) => (
            <Button
              variant="contained"
              color="primary"
              href={`${config.assetUrl}${file}`}
              key={file}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 1, mr: 1 }}
            >
              File {index + 1}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CourseWorkTable;
