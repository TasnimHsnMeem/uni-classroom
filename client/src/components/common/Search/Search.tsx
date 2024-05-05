import { Search } from "@mui/icons-material";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import styles from "./styles.module.scss";

const SearchField = ({
  name,
  inputHandler,
}: {
  name: string;
  inputHandler: (setFieldValue: any) => void;
}) => {
  const { values } = useFormikContext<FormikValues>();

  return (
    <>
      <FormControl className={styles.formMaxWidth} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          name={name}
          value={values[name]}
          onChange={inputHandler}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          className={styles.inputField}
        />
      </FormControl>
    </>
  );
};

export default SearchField;
