import React, { useEffect, useState } from "react";
import { IPost } from "../CourseDetails";
import postService from "../../../../../services/post";
import { Box, Button, Paper, Typography, Grid } from "@mui/material";
import config from "../../../../../config";

type Props = {
  posts: string[];
};

const CourseWorkTable = (props: Props) => {
  const { posts } = props;
  return (
    <Box>
      {posts.map((post, index) => (
        <IndividualCourseWork key={post} courseId={post} />
      ))}
    </Box>
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
  }, [courseId]);

  return (
    <Box component={Paper} elevation={3} p={3} m={2} sx={{ borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        {course?.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {course?.content}
      </Typography>
      {course?.files && course?.files.length > 0 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Files:
          </Typography>
          <Grid container spacing={1}>
            {course.files.map((file, index) => (
              <Grid item key={file}>
                <Button
                  variant="contained"
                  color="primary"
                  href={`${config.assetUrl}${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 1, mr: 1 }}
                >
                  File {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CourseWorkTable;
