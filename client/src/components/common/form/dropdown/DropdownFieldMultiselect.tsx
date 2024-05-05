import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

import { Checkbox, ListItemText } from "@mui/material";
import { FormikContextType, FormikValues, useFormikContext } from "formik";
import { DropdownFieldProps } from "../../../../types/common/form";
import styles from "./styles.module.css";

const DropdownFieldMultiselect: React.FC<DropdownFieldProps> = ({
  name,
  dropDownList,
  itemFieldValue,
}) => {
  const [dropDownSelectedValues, setDropDownSelectedValues] = React.useState<
    string[]
  >([]);

  const {
    touched,
    errors,
    handleBlur,
    setFieldValue,
    values
  }: FormikContextType<FormikValues> = useFormikContext();

  const handleChange = (
    event: SelectChangeEvent<typeof dropDownSelectedValues>
  ) => {
    const {
      target: { value },
    } = event;
    setDropDownSelectedValues(
      typeof value === "string" ? value.split(",") : value
    );
    setFieldValue(name, value);
  };

  React.useEffect(() => {
    if (values?.[name]) {
      setDropDownSelectedValues(values?.[name] || []);
    }
  }, [values?.[name]]);

  return (
    <FormControl fullWidth className="remove-legend">
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={dropDownSelectedValues}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        className={styles.textFieldStyle}
        error={touched?.[name] && !!errors?.[name]}
        onBlur={handleBlur}
        renderValue={(selected) => selected.join(", ")}
      >
        {dropDownList.map((item) => (
          <MenuItem key={item?.[itemFieldValue]} value={item?.[itemFieldValue]}>
            <Checkbox
              checked={
                dropDownSelectedValues.indexOf(item?.[itemFieldValue]) > -1
              }
            />
            <ListItemText primary={item?.[itemFieldValue]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownFieldMultiselect;
