import { FormikProps } from "formik";

function getErrors(errors: any, searchName: string): any {
  if (errors && Object.keys(errors).length > 0) {
    const split = searchName.split(".");

    if (split.length >= 2) {
      const propertyName = split[0];

      if (errors[propertyName] == null || errors[propertyName].length === 0) {
        return "";
      }
      let indexOrName;
      if (isNaN(parseInt(split[1], 10))) {
        indexOrName = split[1];
      } else {
        indexOrName = parseInt(split[1], 10);
      }

      const tempErrors = errors[propertyName][indexOrName];

      const restSearchName = split.slice(2).join(".");

      if (restSearchName === "") {
        return tempErrors;
      } else {
        return getErrors(tempErrors, restSearchName);
      }
    } else {
      return errors[split[0]];
    }
  } else {
    return "";
  }
}

export function hasError(
  name: string,
  form: FormikProps<any>,
  error: boolean | undefined
) {
  const errorString = getErrors(form.errors, name);
  const touched = getErrors(form.touched, name);
  return (
    (form.errors &&
      touched === true &&
      errorString &&
      errorString.length > 0) ||
    error
  );
}

export function getHelperText(
  name: string,
  form: FormikProps<any>,
  helperText: React.ReactNode
) {
  const errorString = getErrors(form.errors, name);
  const touched = getErrors(form.touched, name);

  return (form.errors && touched && errorString) || helperText;
}
