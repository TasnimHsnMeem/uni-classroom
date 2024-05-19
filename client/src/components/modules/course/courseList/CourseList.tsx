import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import { logger } from "../../../../utils/logger";
import SearchField from "../../../common/Search/Search";
import styles from "../../styles/styles.module.scss";
import CourseListTable from "./CourseListTable";
import { useState } from "react";

export default function CourseList() {
  const [searchField, setSearchValue] = useState([]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    logger.log(e.target.value);
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{ SearchField: "" }}
        // validateOnChange={false}
        onSubmit={(values, { setSubmitting, validateForm, setErrors }) => {
          logger.log(values);
        }}
      >
        {({ values, setFieldValue, resetForm, handleChange, handleSubmit }) => (
          <Form>
            <Box className={styles.sidebarStyle}>
                <Box className="d-flex align-items-center justify-content-between mg-b-10">
                    <h1 className={`${styles.titleButton} mg-r-10`}>Courses</h1>
                    {/* <SearchField
                        name="SearchField"
                        inputHandler={inputHandler}
                    /> */}
                </Box>
                <Box>
                    <CourseListTable />
                </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
