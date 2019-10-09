import * as React from "react";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText } from "@material-ui/core";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikCheckboxProps = IBaseProps & CheckboxProps;

export function FormikCheckbox(props: FormikCheckboxProps) {
  const {
    name,
    label,
    helperText,
    error,
    formControlLabelProps,
    formHelperTextProps,
    ...others
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FormControlLabel
            control={<Checkbox {...field} {...others} />}
            label={label}
            {...formControlLabelProps}
          />
          {((form.errors && form.errors[name]) || helperText) && (
            <FormHelperText
              error={(form.errors && form.errors[name] != null) || error}
              {...formHelperTextProps}
            />
          )}
        </React.Fragment>
      )}
    />
  );
}
