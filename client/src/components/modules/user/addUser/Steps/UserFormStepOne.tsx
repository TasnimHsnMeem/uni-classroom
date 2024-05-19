import { FormikValues, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";

import UserAddTitleAndInput from "../UserAddTitileAndInput";
import FormStepTitle from "../../../../common/form/Steps/FormStepTitle";
import DropdownField from "../../../../common/form/dropdown/DropdownField";

import { userRoles } from "../../../../../constants/user";
import styles from "../../../styles/styles.module.scss";
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

const UserFormStepOne: React.FC<Props> = ({ inputHandler }) => {
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
      <FormStepTitle title="User Details" required />
      <UserAddTitleAndInput
        title="First Name*"
        name="name.firstName"
        placeholder="First Name"
      />
      <UserAddTitleAndInput
        title="Last Name*"
        name="name.lastName"
        placeholder="Last Name"
      />

      <h5 className={styles.h5}>Role</h5>
      <DropdownField
        name="role"
        label="Role"
        dropDownList={roles}
        itemFieldValue="name"
        itemFieldLabel="label"
        value={values?.role}
        onChange={roleInputHandler}
        disabled={!!id}
      />

      <UserAddTitleAndInput
        title="Contact Email*"
        name="email"
        placeholder="Contact Email*"
        disabled={!!id}
      />

      <UserAddTitleAndInput
        title="Contact Phone*"
        name="phoneNumber"
        placeholder="Contact Phone*"
        disabled={!!id}
      />
      <UserAddTitleAndInput
        title="Address*"
        name="address"
        placeholder="Address*"
        // disabled={!!id}
      />
    </>
  );
};

export default UserFormStepOne;
