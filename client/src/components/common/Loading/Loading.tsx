import { Box, LinearProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import styles from "./styles.module.scss";

const Loading = () => {
  const loading = useSelector(
    (state: RootState) => state.utils.loading,
    shallowEqual
  );

  const [progress, setProgress] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const showLoading = () => {
    setIsShow(true);
    setProgress((oldProgress) => {
      return 0;
    });
  };

  const hideLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [loading]);

  return (
    <>
      {isShow && (
        <Box className={styles.loadingProgressBar}>
          <Stack className={styles.stack} spacing={2}>
            <LinearProgress
              color="warning"
              variant="determinate"
              value={progress}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Loading;
