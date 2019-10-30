import * as React from "react";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormControl } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormControlProps } from "@material-ui/core/FormControl";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formControlProps?: FormControlProps;
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
    formControlProps,
    ...others
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <FormControl margin="normal" {...formControlProps}>
          <FormControlLabel
            control={<Switch {...field} {...others} />}
            label={label}
            {...formControlLabelProps}
          />
          <FormHelperTextWrapper
            name={name}
            form={form}
            error={error}
            helperText={helperText}
            formHelperTextProps={formHelperTextProps}
          ></FormHelperTextWrapper>
        </FormControl>
      )}
    />
  );
}
