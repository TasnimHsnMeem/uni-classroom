import { FormikValues, useFormikContext } from "formik";
import React from "react";

import InputField from "../../../common/form/input/InputField";
import styles from "../../styles/styles.module.scss";

const UserAddTitleAndInput = ({
  title,
  placeholder,
  name,
  ...rest
}: {
  title: string;
  placeholder: string;
  name: string;
  [x: string]: any;
}) => {
  const { values, setFieldValue } =
    useFormikContext<FormikValues>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value);
  };

  return (
    <>
      <h5 className={styles.h5}>{title}</h5>
      <InputField
        name={name}
        placeholder={placeholder}
        value={values?.[name]}
        onChange={inputHandler}
        {...rest}
      />
    </>
  );
};

export default UserAddTitleAndInput;
