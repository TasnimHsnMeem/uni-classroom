import { Input } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import { FormikContextProps } from "../../../../types/common/form";
import styles from "./styles.module.scss";

const InputField = ({
  placeholder,
  name,
  ...rest
}: {
  placeholder: string;
  name: string;
  [x: string]: any;
}) => {
  const { touched, errors, handleBlur }: FormikContextProps =
    useFormikContext<FormikValues>();

  return (
    <>
      <Input
        placeholder={placeholder}
        className={rest?.className ? rest?.className : styles?.formControl}
        disableUnderline
        name={name}
        onBlur={handleBlur}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <p className="error mt-1 mb-1">{errors[name]}</p>
      )}
    </>
  );
};

export default InputField;
