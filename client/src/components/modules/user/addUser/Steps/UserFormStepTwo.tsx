import React from "react";
import FormStepTitle from "../../../../common/form/Steps/FormStepTitle";
import UserAddTitleAndInput from "../UserAddTitileAndInput";

const UserFormStepTwo = () => {
  return (
    <>
      <FormStepTitle title="Password" required />
      <UserAddTitleAndInput
        title="Password*"
        name="password"
        placeholder="Password"
        type="password"
      />

      <UserAddTitleAndInput
        title="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
    </>
  );
};

export default UserFormStepTwo;
