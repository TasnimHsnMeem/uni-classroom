import { MenuItem, TextField } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";

import {
  DropdownFieldProps,
  FormikContextProps
} from "../../../../types/common/form";
import styles from "./styles.module.css";

const DropdownField = ({
  name,
  label,
  dropDownList,
  itemFieldValue,
  itemFieldLabel,
  size = "small",
  ...rest
}: DropdownFieldProps) => {
  const { touched, errors, handleBlur }: FormikContextProps =
    useFormikContext<FormikValues>();

  return (
    <>
      <TextField
        label={label}
        variant="filled"
        name={name}
        InputProps={{ disableUnderline: true }}
        className={styles.textFieldStyle}
        select
        error={touched?.[name] && !!errors?.[name]}
        onBlur={handleBlur}
        helperText={touched?.[name] && errors?.[name]}
        {...rest}
      >
        {dropDownList.map((item: any) => (
          <MenuItem
            {...item}
            value={item?.[itemFieldValue]}
            key={item?.[itemFieldValue]}
          >
            {item?.[itemFieldLabel]?.replace("_", " ")}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default DropdownField;
