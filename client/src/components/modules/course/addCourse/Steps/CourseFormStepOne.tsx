import { FormikValues, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";

import UserCourseTitleAndInput from "../UserCourseTitileAndInput";
import FormStepTitle from "../../../../common/form/Steps/FormStepTitle";
import DropdownField from "../../../../common/form/dropdown/DropdownField";

import { userRoles } from "../../../../../constants/user";
import { useParams } from "react-router-dom";

type Props = {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const sampleRolesData = [
  // {
  //   name: userRoles.SUPER_ADMIN,
  //   label: "Super Admin",
  // },
  {
    name: userRoles.STUDENT,
    label: "Student",
  },
  {
    name: userRoles.TEACHER,
    label: "Teacher",
  },
];

const CourseFormStepOne: React.FC<Props> = ({ inputHandler }) => {
  const { values, setFieldValue, setFieldTouched } =
    useFormikContext<FormikValues>();

  const { id } = useParams();

  const [roles] = useState(sampleRolesData);

  const roleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value);
    if (e.target.value !== userRoles.TEACHER) {
      setFieldValue("district", "");
      setFieldTouched("district", false);
    }
  };

  return (
    <>
      <FormStepTitle title="Course Details" required />
      <UserCourseTitleAndInput
        title="Name*"
        name="name"
        placeholder="Course Name"
      />
    </>
  );
};

export default CourseFormStepOne;
