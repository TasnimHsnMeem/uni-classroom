import React, { FC } from "react";
import { LocalPhone } from "@mui/icons-material";
import { Form, FormikValues, useFormikContext } from "formik";
import { Box, Card, Container, Grid, Typography } from "@mui/material";

import Navbar from "../../Navbar/Navbar";
import Button from "../../common/Button";
import InputField from "../../common/form/input/InputField";

import styles from "./login.module.scss";
import IMAGES from "../../../assets/themes/images/images";
import RoutingList from "../../../utils/RoutingList";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value, true);
  };

  const navigateToForgotPassword = () => {
    navigate(RoutingList.login.forgetPassword);
  };

  const navigateToHome = () => {
    navigate(RoutingList.index);
  }

  return (
    <Box className={styles.pageBox}>
      {/* new header */}
      <Box className={styles.NewHeaders}>
        <Container maxWidth="xl">
          <Grid container className="align-items-center">
            <Grid item md={1} onClick={navigateToHome}>
              <img src={IMAGES.Logo2} alt="" className="img-fluid" />
            </Grid>
            <Grid item md={10}>
              <div className={`text-center ${styles.HeaderContentCenter}`}>
                <h1 className={`text-danger ${styles.headingH1}`}  onClick={navigateToHome}>
                  Metropolitan University
                </h1>
                <Typography
                  className={`font-size-8 text-danger font-weight-small`}
                  style={{ margin: "0" }}
                >
                  (Web Mentor System)
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* new header */}

      {/* <Navbar isLogoOnly={true} /> */}

      <Box className={styles.loginBanner}>
        <Grid container>
          <Grid item md={7}>
            <figure className={styles.bannerImg}>
              <img
                className="img-fluid"
                src={IMAGES.Banner2}
                alt="announcement-img"
              />
            </figure>
          </Grid>
          <Grid item md={5}>
            <Box className={styles.bannerContent2}>
              <Box className={styles.loginBox}>
                <Form className={styles.loginWrap}>
                  <Card className={styles.loginCard} variant="outlined">
                    <div className={styles.cardBody2}>
                      <div className={`text-center ${styles.loginHeadTop}`}>
                        <h2 className="font-weight-semi-bold mb-1">Sign In</h2>
                        {/* <p className="font-size-18 text-dark">New Here?  <a href="" className="text-danger">Create an Account</a></p> */}
                      </div>
                      <div className="form-group">
                        <label className="mb-1 font-size-14 font-weight-medium">
                          Email
                        </label>
                        <InputField
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={values?.email}
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="form-group">
                        <div className="mb-1 d-flex justify-content-between align-items-center">
                          <label className="font-size-14 font-weight-medium">
                            Password
                          </label>
                          {/* <button
                            type="button"
                            className="btn btn-link font-weight-semi-bold font-size-14"
                            onClick={navigateToForgotPassword}
                          >
                            Forgot Password?
                          </button> */}
                        </div>
                        <InputField
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          value={values?.password}
                          onChange={inputHandler}
                        />
                      </div>
                      <div
                        className={`d-flex justify-content-center ${styles.loginFooter}`}
                      >
                        <Button
                          color="alert"
                          className="signin-btn"
                          type="submit"
                        >
                          Sign In
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Container>
        <Box sx={{ marginTop: "2.25rem", textAlign: "center" }}>
          <p className={`mb-10 ${styles.forMore}`}>
            <LocalPhone className={`text-danger ${styles.iconPhone}`} />
            For more information, call us at{" "}
            <a
              className="text-danger font-weight-bold text-decoration-none"
              href="tel:O6123505123"
            >
             {" "} O6123505123
            </a>
            {" "}(General Quarries),
            <a
              className="text-danger font-weight-bold text-decoration-none"
              href="tel:06123505124"
            >
              {" "}06123505124 
            </a>
            {" "}(Admin & IT Queries)
          </p>
          <p className="font-size-14">*Terms and conditions apply</p>
        </Box>
      </Container> */}
    </Box>
  );
};

export default LoginForm;
