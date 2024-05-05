import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

import IMAGES from "../../../../assets/themes/images/images";
import Button from "../../Button";
import styles from "./styles.module.css";

interface Props {
  open: boolean;
  description?: string;
  submitText?: string;
  onConfirm: () => void;
  onClose: () => void;
}
const ConfirmationModal: React.FC<Props> = (props) => {
  const {
    open = false,
    onConfirm,
    onClose = () => { },
    submitText = "Submit",
    description = "Are you sure you want to submit this form?",
  } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Box className={styles.dialogContent}>
            <img src={IMAGES.AlertIcon} alt="alert" />
            <DialogContentText sx={{ margin: "20px" }}>
              <b className={styles.bold}>{description}</b>
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions className={styles.DialogActions}>
          <Button color="default" type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="alert" type="button" onClick={onConfirm}>
            {submitText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
