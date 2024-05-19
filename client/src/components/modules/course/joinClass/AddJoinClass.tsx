import { Box } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import React from "react";

import JoinCourseFormStepOne from "./JoinCourseStep1";

const AddJoinClassForm = ({ steps }: { steps: number }) => {
  const { values, setFieldValue, setValues } = useFormikContext<FormikValues>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value, true);
  };

  return (
    <div>
      <Box>
        {steps === 0 && <JoinCourseFormStepOne inputHandler={inputHandler} />}
      </Box>
    </div>
  );
};

export default AddJoinClassForm;
