import React from "react";
import FormStepTitle from "../../../../common/form/Steps/FormStepTitle";
import UserCourseTitleAndInput from "../UserCourseTitileAndInput";

const UserFormStepTwo = () => {
  return (
    <>
      <FormStepTitle title="Password" required />
      <UserCourseTitleAndInput
        title="Password*"
        name="password"
        placeholder="Password"
        type="password"
      />

      <UserCourseTitleAndInput
        title="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
    </>
  );
};

export default UserFormStepTwo;
