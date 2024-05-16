import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import adminNoticeService from "../../../services/adminNotice";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../redux/store";
import { userRoles } from "../../../constants/user";

type Props = {};

const AdminNotice = (props: Props) => {
  const { role } = useAppSelector((state) => state.auth.profileData.user);
  const [initialValues, setInitData] = useState({
    title: "",
    content: "",
    id: "",
  });

  const handleSubmit = async (values: any) => {
    // Handle form submission here
    console.log(values);
    try {
      const res = await adminNoticeService.update(initialValues.id, {
        title: values.title,
        content: values.content,
      });
      toast.success("Notice updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getFirstNotice = async () => {
      try {
        const res = await adminNoticeService.get(0, 1);
        setInitData(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFirstNotice();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 2,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Notice
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <Box sx={{ marginBottom: 2 }}>
                {[userRoles.ADMIN].includes(role) ? (
                  <>
                    <Typography
                      variant="body1"
                      component="label"
                      htmlFor="title"
                    >
                      Title:
                    </Typography>
                    <TextField
                      fullWidth
                      id="title"
                      name="title"
                      variant="outlined"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ marginTop: 1 }}
                    />
                    <ErrorMessage name="title" component="div" />
                  </>
                ) : (
                  <Typography variant="h5" component="h2">
                    {initialValues.title}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                {[userRoles.ADMIN].includes(role) ? (
                  <>
                    <Typography
                      variant="body1"
                      component="label"
                      htmlFor="content"
                    >
                      Content:
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      id="content"
                      name="content"
                      variant="outlined"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ marginTop: 1 }}
                    />
                    <ErrorMessage name="content" component="div" />
                  </>
                ) : (
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      maxHeight: "75vh",
                      lineHeight: "25px",
                      overflowX: "hidden",
                    }}
                  >
                    {initialValues.content}
                  </pre>
                )}
              </Box>
              {[userRoles.ADMIN].includes(role) && (
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default AdminNotice;
