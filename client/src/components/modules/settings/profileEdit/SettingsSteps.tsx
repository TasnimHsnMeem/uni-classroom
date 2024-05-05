import { FC } from "react";
import { ChevronRight } from "@mui/icons-material";
import { Box, Breadcrumbs, Typography } from "@mui/material";

import styles from "../Settings.module.scss";

const SettingsSteps: FC = () => {
  const breadcrumbs = [
    <Typography key="1" color="text.secondary">
      Settings
    </Typography>,
    <Typography key="2" color="text.primary">
      Profile
    </Typography>,
  ];
  return (
    <Box className={styles.mb20}>
      <Breadcrumbs
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};
export default SettingsSteps;
