export type FormikContextProps = {
  values: FormikValues;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  touched: FormikTouched<FormikValues>;
  errors: any;
  handleBlur: (e: React.FocusEvent<any>) => void;
};

interface DropdownEachField {
  name: string;
  [x: string]: any;
}

export interface DropdownFieldProps {
  dropDownList: Array<DropdownEachField>;
  value: string;
  label: string;
  name: string;
  size?: string;
  itemFieldValue: string;
  itemFieldLabel: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

interface IStep {
  icon: any;
  title: string;
}
export interface IStepProps {
  steps: number;
  setSteps: (n: number) => void;
  stepHandler: (
    validateForm: () => Promise<any>,
    values: FormikValues,
    stepIndex: number,
    setErrors?: (errors: FormikErrors<Values>) => void,
    setFieldTouched?: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void,
    setTouched?: (touched: FormikTouched<FormikValues>, shouldValidate?: boolean | undefined) => void
  ) => void;
  stepsInfo: IStep[];
  draftFunction?: ()=>void;
}
