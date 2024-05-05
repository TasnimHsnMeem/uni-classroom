import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormikValues, useFormikContext } from "formik";

import UserFormStepTwo from "./Steps/CourseFormStepTwo";
import CourseFormStepOne from "./Steps/CourseFormStepOne";

import userService from "../../../../services/user";

import { logger } from "../../../../utils/logger";
import { useAppDispatch } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";

const AddCourseForm = ({ steps }: { steps: number }) => {
  const { values, setFieldValue, setValues } = useFormikContext<FormikValues>();

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "role" && values?.town) {
      setFieldValue("town", null);
    }
    setFieldValue(e.target.name, e.target.value, true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          dispatch(setLoadingAction(true));
          const res = await userService.getById(id);
          dispatch(setLoadingAction(false));

          const formValues = {
            ...res.data.data,
          };
          setValues(formValues);
        }
      } catch (error: any) {
        dispatch(setLoadingAction(false));
        logger.error(error);
      }
    };
    if (id) {
      getData();
    }
  }, [dispatch, id, setValues]);

  return (
    <div>
      <Box>
        {steps === 0 && <CourseFormStepOne inputHandler={inputHandler} />}
      </Box>
    </div>
  );
};

export default AddCourseForm;
