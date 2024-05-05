import { FC } from "react";
import { toast } from "react-toastify";
import { Formik, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";

import { useAppDispatch } from "../../../redux/store";
import { userSignIn } from "../../../redux/auth/action";
import { setLoadingAction } from "../../../redux/utils/actions";
import { loginInitialData, loginValidationSchema } from "./utils";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const submitHandler = (values: FormikValues) => {
    const { email, password } = values;

    dispatch(setLoadingAction(true));

    userSignIn({ email, password })(dispatch)
      .then((res: any) => {
        dispatch(setLoadingAction(false));
        navigate("/");
      })
      .catch((err) => {
        dispatch(setLoadingAction(false));
        toast.error("Email or password did not match");
      });
  };

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={loginValidationSchema}
      initialValues={loginInitialData}
      // validateOnChange={false}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      <LoginForm />
    </Formik>
  );
};

export default Login;
