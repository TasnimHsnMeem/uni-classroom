import { FormikValues, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { userRoles } from "../../../../constants/user";
import FormStepTitle from "../../../common/form/Steps/FormStepTitle";
import UserCourseTitleAndInput from "../addCourse/UserCourseTitileAndInput";

type Props = {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const JoinCourseFormStepOne: React.FC<Props> = ({ inputHandler }) => {

  return (
    <>
      <FormStepTitle title="Course Joining Info" required />
      <UserCourseTitleAndInput
        title="Code*"
        name="code"
        placeholder="Course Code"
      />
    </>
  );
};

export default JoinCourseFormStepOne;
