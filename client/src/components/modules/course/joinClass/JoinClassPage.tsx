import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Box, Checkbox, Divider, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik, FormikErrors, FormikValues } from "formik";

// import AddCourseForm from "./AddCourseForm";
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
  joinCourseInitData,
  joinCourseStepsInfo,
  joinCourseValidationSchema,
} from "../utils";
import styles from "../../styles/styles.module.scss";
import AddJoinClassForm from "./AddJoinClass";

const JoinClassPage = () => {
  const [initData] = useState(joinCourseInitData);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);
  const [stepsInfo, setStepsInfo] = useState(joinCourseStepsInfo);
  const [steps, setSteps] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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
      dispatch(setLoadingAction(true));
      const res = await courseService.joinClass(validValues.code as string);
      dispatch(setLoadingAction(false));
      toast.success("Joined class successfully");
      navigate(RoutingList?.course?.index);
    } catch (err: any) {
      dispatch(setLoadingAction(false));
      toast.error(err.response.data.msg);
    }
  };

  // useEffect(() => {
  //   if (id) {
  //     setStepsInfo(joinCourseStepsInfo);
  //   }
  // }, [id]);

  return (
    <>
      <Box className={styles.boxPadding}>
        <Formik
          enableReinitialize={true}
          validationSchema={joinCourseValidationSchema}
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
                title="Course Joining"
                subtitle="to my enrolled courses"
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
                  <AddJoinClassForm steps={steps} />
                  <Divider className={styles.mTopBottom20} />
                  <ConfirmationModal
                    open={showConfirmationModal}
                    onConfirm={() => saveHandler(values)}
                    onClose={() => {
                      logger.log("Close clicked");
                      setShowConfirmationModal(false);
                    }}
                  />{" "}
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

export default JoinClassPage;
