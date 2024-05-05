import { FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";

import InputField from "../../../common/form/input/InputField";

interface LoginInputProps {
  title: string;
  name: string;
  placeholder: string;
  [x: string]: any;
}

const LoginInputField: FC<LoginInputProps> = (props) => {
  const { title, name, placeholder, ...rest } = props;

  const { values, setFieldValue } = useFormikContext<FormikValues>();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value, true);
  };

  return (
    <div className="form-group">
      <label className="mb-3 font-size-14 font-weight-medium">
        Confirm New Password
      </label>
      <InputField
        type="text"
        className="form-control"
        name={name}
        value={values?.[name]}
        onChange={inputHandler}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default LoginInputField;
