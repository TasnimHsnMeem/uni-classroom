import { Box } from "@mui/material";

import IMAGES from "../../../../assets/themes/images/images";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
  isEdit: boolean;
};

const StepsHeadingSection = (props: Props) => {
  const { title, subtitle, isEdit } = props;

  return (
    <Box className={styles.flexCenterStart}>
      <span className={styles.route}>{title}</span>
      <img
        src={IMAGES.RightArrowIcon}
        alt="right arrow"
        className={styles.rightArrowSpacing}
      />
      <span className={styles.activeRoute}>
        {isEdit ? "Edit " : "Add New "} {subtitle}
      </span>
    </Box>
  );
};

export default StepsHeadingSection;
