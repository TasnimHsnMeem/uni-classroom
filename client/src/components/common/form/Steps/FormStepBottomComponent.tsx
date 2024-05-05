import React from "react";
import { Box } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

import Button from "../../Button";

import { IStepProps } from "../../../../types/common/form";
import { useNavigate } from "react-router-dom";

const FormStepBottomComponent: React.FC<IStepProps> = (props) => {
  const { steps, stepsInfo, stepHandler, draftFunction } = props;

  const navigate = useNavigate();

  const { validateForm, values, setErrors, setFieldTouched,initialValues, setFieldError } =
    useFormikContext<FormikValues>();

  const handleBackStep = () => {
    if (steps === 0) {
      navigate(-1);
    }
    if(initialValues?.["password"] === ""){
      setFieldTouched('password', true)
    }
    if(initialValues?.["confirmPassword"] === ""){
      setFieldTouched('confirmPassword', true)
    }
    stepHandler(validateForm, values, steps - 1, setErrors, setFieldTouched);
  };

  const handleCancelClick = () => {
    if (stepsInfo.length - 1 === steps && draftFunction) {
      draftFunction();
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <Box className="d-flex align-items-center justify-content-between">
        <Button color="default" type="button" onClick={handleBackStep}>
          Back
        </Button>
        <Box className="d-flex align-items-center">
          <Button className="mg-r-10" type="button" onClick={handleCancelClick}>
            {draftFunction && steps === stepsInfo.length - 1
              ? "Save Draft"
              : "Cancel"}
          </Button>
          <Button color="alert" type="submit">
            {steps === stepsInfo?.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FormStepBottomComponent;
