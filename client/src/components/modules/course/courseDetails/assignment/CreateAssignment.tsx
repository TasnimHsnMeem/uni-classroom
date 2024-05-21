import {
  Box,
  Grid,
  Typography,
  TextField,
  Button as MuiButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field, FormikValues } from "formik";
import { FC, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Yup from "yup";

import postService from "../../../../../services/post";
import { courseWorkValidationSchema } from "../../utils";
import UserCourseTitleAndInput from "../../addCourse/UserCourseTitileAndInput";
import Button from "../../../../common/Button";

interface Props {
  saveAssignmentHandler: (values: FormikValues) => Promise<void>;
}

const CreateAssignment: FC<Props> = ({ saveAssignmentHandler }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [initData] = useState({
    title: "",
    content: "",
    files: [],
    submissions: [],
  });

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Formik
        validationSchema={courseWorkValidationSchema}
        initialValues={initData}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await saveAssignmentHandler(values);
          resetForm();
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h5" gutterBottom>
                  Create Assignment
                </Typography>
                <UserCourseTitleAndInput
                  title="Title*"
                  name="title"
                  placeholder="Assignment Title"
                />
                <UserCourseTitleAndInput
                  title="Description*"
                  name="content"
                  placeholder="Content"
                />
                <input
                  type="file"
                  name="files"
                  multiple
                  ref={fileInputRef}
                  onChange={async (event) => {
                    if (event.target.files) {
                      const files = Array.from(event.target.files);
                      const fileData = await Promise.all(
                        files.map(async (file) => {
                          const res = await postService.upload(file);
                          return res.data.data;
                        })
                      );
                      setFieldValue("files", [...values.files, ...fileData]);
                      // Reset file input value to allow re-uploading the same file
                      event.target.value = "";
                    }
                  }}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <label htmlFor="file-input">
                  <MuiButton
                    variant="contained"
                    component="span"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Upload Files
                  </MuiButton>
                </label>
                {values.files.length > 0 && (
                  <List>
                    {values.files.map((file, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={file} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              const newFiles = values.files.filter(
                                (_, i) => i !== index
                              );
                              setFieldValue("files", newFiles);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 3,
                  }}
                >
                  <Box>
                    <Button color="alert" type="submit">
                      {/* {steps === stepsInfo?.length - 1 ? "Submit" : "Next"} */}
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateAssignment;
