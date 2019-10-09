import * as React from "react";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikSwitchProps = IBaseProps & SwitchProps;

export function FormikSwitch(props: FormikSwitchProps) {
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
            control={<Switch {...field} {...others} />}
            label={label}
            {...formControlLabelProps}
          />
          {((form.errors && form.errors[name]) || helperText) && (
            <FormHelperText
              error={(form.errors && form.errors[name] != null) || error}
              {...formHelperTextProps}
            ></FormHelperText>
          )}
        </React.Fragment>
      )}
    />
  );
}
