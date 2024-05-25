import React, { useEffect, useState } from "react";
import { IPost } from "../CourseDetails";
import postService from "../../../../../services/post";
import {
  Box,
  Button,
  Paper,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import config from "../../../../../config";
import { useParams } from "react-router-dom";
import ConfirmationModal from "../../../../common/modal/confirmationModal/ConfirmationModal";

type Props = {
  posts: string[];
  refetch: () => Promise<void>;
};

const CourseWorkTable = (props: Props) => {
  const { posts, refetch } = props;
  return (
    <Box>
      {posts.map((post) => (
        <IndividualCourseWork key={post} postId={post} refetch={refetch} />
      ))}
    </Box>
  );
};

const IndividualCourseWork = ({
  postId,
  refetch,
}: {
  postId: string;
  refetch: () => Promise<void>;
}) => {
  const [courseWork, setCourseWork] = useState<IPost | undefined>(undefined);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { id: courseId } = useParams();

  const getData = async () => {
    try {
      const result = await postService.getById(postId);
      setCourseWork(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCourseWorkHandler = async () => {
    try {
      await postService.delete(postId, courseId as string);
      // setCourseWork(undefined);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [postId]);

  return (
    <Box component={Paper} elevation={3} p={3} m={2} sx={{ borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          {courseWork?.title}
        </Typography>
        <IconButton onClick={()=>setShowConfirmationModal(true)} color="secondary">
          <DeleteIcon />
        </IconButton>
      </Box>
      <ConfirmationModal
        open={showConfirmationModal}
        onConfirm={deleteCourseWorkHandler}
        submitText="Delete"
        description="Are you sure you want to delete this Course Content?"
        onClose={() => setShowConfirmationModal(false)}
      />
      <Typography variant="body1" paragraph>
        {courseWork?.content}
      </Typography>
      {courseWork?.files && courseWork.files.length > 0 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Files:
          </Typography>
          <Grid container spacing={1}>
            {courseWork.files.map((file, index) => (
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
