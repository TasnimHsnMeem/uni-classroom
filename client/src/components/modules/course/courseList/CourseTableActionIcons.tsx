import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AccessibleForward,
  ContentCopy,
  Delete,
  Edit,
} from "@mui/icons-material";
import { shallowEqual, useSelector } from "react-redux";

import ConfirmationModal from "../../../common/modal/confirmationModal/ConfirmationModal";

import { RootState } from "../../../../redux/store";
import { userRoles } from "../../../../constants/user";
import RoutingList from "../../../../utils/RoutingList";

import styles from "../../styles/styles.module.scss";
import config from "../../../../config";

type Props = {
  item: any;
  handleDelete: (id: string) => void;
};

const CourseTableActionIcons = (props: Props) => {
  const { item, handleDelete } = props;
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const navigate = useNavigate();

  const { role } = useSelector(
    (state: RootState) => state?.auth?.profileData?.user,
    shallowEqual
  );

  const navigateToCourseEdit = (id: string) => {
    navigate(`${RoutingList.course.edit}/${id}`);
  };

  const openConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const deleteHandler = async () => {
    await handleDelete(item.id);
    closeConfirmationModal();
  };

  return (
    <>
      <Box className={styles.actionSx}>
        {[userRoles.TEACHER].includes(role) && (
          <Box className={styles.actionSx}>
            <Button
              sx={{ minWidth: "auto", p: 0 }}
              type="button"
              className={styles.btnLink}
              onClick={() => navigateToCourseEdit(item.id)}
            >
              <Edit sx={{ color: "#606164" }} />
            </Button>
          </Box>
        )}

        {[userRoles.ADMIN, userRoles.TEACHER].includes(role) && (
          <Box className={styles.actionSx}>
            <Button
              sx={{ minWidth: "auto", p: 0 }}
              type="button"
              className={styles.btnLink}
              onClick={openConfirmationModal}
            >
              <Delete className={styles.colorGray} />
            </Button>
          </Box>
        )}
      </Box>

      <ConfirmationModal
        submitText={"Delete"}
        open={showConfirmationModal}
        onConfirm={deleteHandler}
        onClose={closeConfirmationModal}
        description="Are you sure to delete this user? You can not revert the changes."
      />
    </>
  );
};

export default CourseTableActionIcons;
