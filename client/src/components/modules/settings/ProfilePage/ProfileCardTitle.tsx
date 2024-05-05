import { Box, Button, Typography } from "@mui/material";

import styles from "../Settings.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  buttonTitle?: string;
  buttonOnClick?: () => void;
}

const ProfileCardTitle = (props: Props) => {
  const { title, subtitle, buttonTitle, buttonOnClick } = props;

  return (
    <Box
      className={`d-flex align-items-center justify-content-between ${styles.profileHeader}`}
    >
      <Box>
        <h2 className={styles.headingH2}>{title}</h2>
        <Typography className={styles.textSecondary}>{subtitle}</Typography>
      </Box>
      {buttonTitle && (
        <Button variant="outlined" onClick={buttonOnClick} color="error">
          {buttonTitle}
        </Button>
      )}
    </Box>
  );
};

export default ProfileCardTitle;
