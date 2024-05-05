import {
  Box, Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoutingList from "../../../../utils/RoutingList";

import styles from "../Settings.module.scss";
import ProfileCardTitle from "./ProfileCardTitle";

const PasswordSection = () => {
  const navigate = useNavigate();
  const navigateToChangePassword = () => {
    navigate(RoutingList.settings.change_password);
  };
  return (
    <Card className={styles.profileSectionCard}>
      <CardContent>
        <ProfileCardTitle
          title="Password"
          subtitle="A secure password helps protect your account"
          buttonTitle="Change password"
          buttonOnClick={navigateToChangePassword}
        />
        <Grid className="align-items-center" container spacing={1}>
          <Grid item xs={12} md={3}>
            <Box>
              <Box className={styles.dots}></Box>
              <Box className={styles.dots}></Box>
              <Box className={styles.dots}></Box>
              <Box className={styles.dots}></Box>
              <Box className={styles.dots}></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography className={styles.textPrimary}>
              Last changed Aug 08, 2022
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PasswordSection;
