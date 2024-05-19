import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Box, Checkbox, Divider, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik, FormikErrors, FormikValues } from "formik";

import AddCourseForm from "./AddCourseForm";
import StepsHeadingSection from "../../../common/form/Steps/StepsHeadingSection";
import FormStepNavComponent from "../../../common/form/Steps/FormStepComponent";
import FormStepBottomComponent from "../../../common/form/Steps/FormStepBottomComponent";
import ConfirmationModal from "../../../common/modal/confirmationModal/ConfirmationModal";

import courseService from "../../../../services/course";

import { logger } from "../../../../utils/logger";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { setLoadingAction } from "../../../../redux/utils/actions";
import RoutingList from "../../../../utils/RoutingList";
import {
  courseCreateInitData,
  courseCreationStepsInfo,
  courseCreationValidationSchema,
  courseEditStepsInfo,
} from "../utils";
import styles from "../../styles/styles.module.scss";

const AddCourse = () => {
  const [initData] = useState(courseCreateInitData);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [stepsInfo, setStepsInfo] = useState(courseCreationStepsInfo);
  const [steps, setSteps] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const { user } = useAppSelector((state) => state.auth.profileData);

  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const { id } = useParams();

  const stepHandler = (
    validateForm: (values: FormikValues) => Promise<any>,
    values: FormikValues,
    stepIndex: number,
    setErrors?: (errors: FormikErrors<FormikValues>) => void
  ) => {
    validateForm(values).then((res) => {
      if (Object.entries(res).length === 0) {
        // validation success
        const lastStepIndex = stepsInfo?.length - 1;

        if (stepIndex <= -1) {
          setSteps(0);
          return;
        } else if (steps === lastStepIndex && stepIndex > lastStepIndex) {
          setShowConfirmationModal(true);
          return;
        } else if (stepIndex <= lastStepIndex) {
          setSteps((prev) => stepIndex);
          return;
        }
      } else {
        // validation failed
        logger.error(res);
        if (setErrors) {
          setErrors(res);
        }
      }
    });
  };

  const saveHandler = async (values: FormikValues) => {
    try {
      const validValues = { ...values };

      // for (const key of Object.keys(validValues)) {
      //   if (!validValues[key]) {
      //     delete validValues[key];
      //   }
      // }
      dispatch(setLoadingAction(true));
      let res: any;
      if (id) {
        res = await courseService.update(id, { ...validValues });
      } else {
        res = await courseService.create({ ...validValues, teacher: user._id });
      }
      // dispatch(setLoadingAction(false));
      toast.success("Course saved successfully");
      navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  const changePasswordHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    const checked = e.target.checked;
    setIsPasswordEditable(checked);
    if (checked) {
      setStepsInfo(courseCreationStepsInfo);
    } else {
      setSteps(0);
      setFieldValue("password", "");
      setFieldValue("confirmPassword", "");
      setStepsInfo(courseEditStepsInfo);
    }
  };

  useEffect(() => {
    if (id) {
      setStepsInfo(courseEditStepsInfo);
    }
  }, [id]);

  return (
    <>
      <Box className={styles.boxPadding}>
        <Formik
          enableReinitialize={true}
          validationSchema={courseCreationValidationSchema[steps]}
          initialValues={initData}
          // validateOnChange={false}
          onSubmit={(
            values,
            {
              setSubmitting,
              validateForm,
              setFieldError,
              setErrors,
              setTouched,
            }
          ) => {
            stepHandler(
              validateForm,
              values,
              steps > stepsInfo?.length - 1 ? steps : steps + 1,
              setErrors
            );
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldTouched,
            setFieldValue,
          }) => (
            <Form>
              <StepsHeadingSection
                title="Course"
                subtitle="Enter course info"
                isEdit={!!id}
              />
              <FormStepNavComponent
                steps={steps}
                setSteps={setSteps}
                stepHandler={stepHandler}
                stepsInfo={stepsInfo}
              />
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} md={8}>
                  <AddCourseForm steps={steps} />
                  <Divider className={styles.mTopBottom20} />
                  <ConfirmationModal
                    open={showConfirmationModal}
                    onConfirm={() => saveHandler(values)}
                    onClose={() => {
                      logger.log("Close clicked");
                      setShowConfirmationModal(false);
                    }}
                  />{" "}
                  {id && (
                    <>
                      <Checkbox
                        checked={isPasswordEditable}
                        name="isTermsAccepted"
                        onChange={(e) =>
                          changePasswordHandler(e, setFieldValue)
                        }
                      />
                      <p className="form-label font-size-14 font-weight-medium cursor-pointer text-danger">
                        Want to change password?
                      </p>
                      <Divider className={styles.mTopBottom20} />
                    </>
                  )}
                  <FormStepBottomComponent
                    steps={steps}
                    setSteps={setSteps}
                    stepsInfo={stepsInfo}
                    stepHandler={stepHandler}
                  />
                </Grid>
              </Grid>{" "}
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AddCourse;
