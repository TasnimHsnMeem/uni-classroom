import { FormikValues, useFormikContext } from "formik";
import React from "react";
import InputField from "../../../common/form/input/InputField";

type Props = {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  [x: string]: any;
};

const ProfileInputElement = (props: Props) => {
  const { name, type = "text", placeholder, label, ...rest } = props;
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value, true);
  };
  return (
    <div className="form-group">
      <label className="mb-1 form-label">{label}*</label>
      <InputField
        type={type}
        className="form-control form-control-sm"
        name={name}
        value={values[name]}
        onChange={inputHandler}
        placeholder={placeholder}
        required
        {...rest}
      />
    </div>
  );
};

export default ProfileInputElement;
