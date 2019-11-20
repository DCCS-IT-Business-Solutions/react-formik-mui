import { FormikProps } from "formik";

export function hasError(
  name: string,
  form: FormikProps<any>,
  error: boolean | undefined
) {
  // When using Formik-Errors -> only show Error when touched
  return (
    (form.errors && form.touched[name] && form.errors[name] != null) || error
  );
}

export function getHelperText(
  name: string,
  form: FormikProps<any>,
  helperText: React.ReactNode
) {
  // Return Formik Errortext if Formik-Error and Touched OR return helpertext
  return (
    (form.errors && form.touched[name] === true && form.errors[name]) ||
    helperText
  );
}
