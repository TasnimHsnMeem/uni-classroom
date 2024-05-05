import { Avatar, Box, Icon } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import React from "react";

import IMAGES from "../../../../assets/themes/images/images";
import { IStepProps } from "../../../../types/common/form";
import styles from "./styles.module.scss";

const FormStepNavComponent: React.FC<IStepProps> = ({
  steps,
  setSteps,
  stepHandler,
  stepsInfo,
}) => {
  const { validateForm, values, setErrors, setFieldTouched , setTouched} =
    useFormikContext<FormikValues>();
  const handleSteps = (stepIndex: number) => () => {
    stepHandler(validateForm, values, stepIndex, setErrors, setFieldTouched, setTouched);
  };

  return (
    <Box className={styles?.stepBoxContainer}>
      {stepsInfo.map((item, index) => (
        <Box
          key={item?.title}
          className={styles?.stepBox}
          onClick={handleSteps(index)}
        >
          <Avatar
            key={item?.title}
            className={steps < index ? styles.avatar : styles.activeAvatar}
          >
            <Icon component={item.icon}></Icon>
          </Avatar>
          <span className={steps < index ? styles.route : styles.activeRoute}>
            {item.title}
          </span>
          {index !== stepsInfo?.length - 1 ? (
            <img
              src={IMAGES.RightArrowIcon}
              alt=""
              className={styles.rightArrowSpacing}
            />
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default FormStepNavComponent;
