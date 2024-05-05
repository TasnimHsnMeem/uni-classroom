import { Box, Divider } from "@mui/material";
import styles from "./styles.module.scss";

const FormStepTitle = ({
  title,
  required,
}: {
  title: string;
  required: boolean;
}) => {
  return (
    <>
      <Box className={styles?.stepFormTitle}>
        <p className={styles.stepTitle}>{title}</p>
        {required && <p style={{ color: "#DA3923" }}>*required fields</p>}
      </Box>
      <Divider className={styles?.dividerStyle} />
    </>
  );
};

export default FormStepTitle;
