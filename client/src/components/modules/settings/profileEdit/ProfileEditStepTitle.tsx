import { Box, Divider, Typography } from "@mui/material";

import styles from "../Settings.module.scss";

type Props = {
  title: string;
};

const ProfileEditStepTitle = (props: Props) => {
  const { title } = props;
  return (
    <Box className={styles.mb20}>
      <Box className="d-flex align-items-center justify-content-between">
        <Typography variant="h2" component="h2" className={styles.headingH2}>
          {title}
        </Typography>
        <Typography color="error">*required fields</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default ProfileEditStepTitle;
