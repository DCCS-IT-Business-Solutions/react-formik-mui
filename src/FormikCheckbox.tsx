import * as React from "react";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText } from "@material-ui/core";

export interface IFormikCheckboxProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: any; // any because the interface FormControlLabelProps has required properties
  checkBoxProps?: CheckboxProps;
  fastFieldProps?: any;
}

export function FormikCheckbox(props: IFormikCheckboxProps) {
  const {
    name,
    label,
    helperText,
    error,
    checkBoxProps,
    formControlLabelProps,
    fastFieldProps
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FormControlLabel
            control={<Checkbox {...field} {...checkBoxProps} />}
            label={label}
            {...formControlLabelProps}
          />
          <FormHelperText
            error={(form.errors && form.errors[name] != null) || error}
          >
            {(form.errors && form.errors[name]) || helperText}
          </FormHelperText>
        </React.Fragment>
      )}
      {...fastFieldProps}
    />
  );
}
