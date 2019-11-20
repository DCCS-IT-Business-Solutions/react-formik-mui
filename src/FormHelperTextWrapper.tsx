import { FormikProps } from "formik";
import * as React from "react";
import { FormHelperText } from "@material-ui/core";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { hasError, getHelperText } from "./utils";

export interface IFormHelperTextWrapperProps {
  name: string;
  form: FormikProps<any>;
  error?: boolean;
  helperText?: string;
  formHelperTextProps?: FormHelperTextProps;
  showEmptyFormHelperText?: boolean;
}

export default function FormHelperTextWrapper(
  props: IFormHelperTextWrapperProps
) {
  const {
    name,
    helperText,
    error,
    form,
    formHelperTextProps,
    showEmptyFormHelperText
  } = props;

  if (
    !showEmptyFormHelperText &&
    form &&
    form.errors &&
    Object.keys(form.errors).length === 0 &&
    !form.errors[name] &&
    !helperText
  ) {
    return null;
  }

  return (
    <React.Fragment>
      <FormHelperText
        error={hasError(name, form, error)}
        {...formHelperTextProps}
      >
        {getHelperText(name, form, helperText)}
      </FormHelperText>
    </React.Fragment>
  );
}

FormHelperTextWrapper.defaultProps = {
  showEmptyFormHelperText: true
};
