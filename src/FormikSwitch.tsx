import * as React from "react";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText } from "@material-ui/core";

export interface IFormikSwitchProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: any; // any because the interface FormControlLabelProps has required properties
  switchProps?: SwitchProps;
  fastFieldProps?: any;
}

export function FormikSwitch(props: IFormikSwitchProps) {
  const {
    name,
    label,
    helperText,
    error,
    formControlLabelProps,
    switchProps,
    fastFieldProps
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FormControlLabel
            control={<Switch {...field} {...switchProps} />}
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
