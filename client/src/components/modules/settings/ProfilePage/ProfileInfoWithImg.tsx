import {
  Grid,
  Typography
} from "@mui/material";

import styles from "../Settings.module.scss";

const ProfileInfoWithImg = () => {
  return (
    <Grid className="align-items-center" container spacing={1}>
      <Grid item xs={12} md={3}>
        <Typography className={`font-weight-medium ${styles.textPrimary}`}>
          Photo
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography className={styles.textPrimary}>
          A photo help personalize your account
        </Typography>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Box className={`avatar avatar-circle avatar-90 ${styles.profileBox}`}>
          <img src={IMAGES.Profile} alt="..." />
          <IconButton
            className={styles.fileUpload}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <Box className={styles.cameraIconWrap}>
              <CameraAltOutlined />
            </Box>
          </IconButton>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default ProfileInfoWithImg;
