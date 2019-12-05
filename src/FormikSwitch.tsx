import * as React from "react";
import Switch, { SwitchProps } from "@material-ui/core/Switch";
import { FastFieldProps } from "formik";
import { FormControlLabel, FormControl } from "@material-ui/core";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormControlProps } from "@material-ui/core/FormControl";
import { FormikField } from "./FormikField";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  useField?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
  fieldProps?: {};
  validate?: any;
}

export type FormikSwitchProps = IBaseProps & SwitchProps;

export function FormikSwitch(props: FormikSwitchProps) {
  const {
    name,
    label,
    helperText,
    error,
    useField,
    formControlLabelProps,
    formHelperTextProps,
    formControlProps,
    fieldProps,
    validate,
    ...others
  } = props;

  return (
    <FormikField
      name={name}
      useField={useField}
      validate={validate}
      {...fieldProps}
    >
      {({ field, form }: FastFieldProps<any>) => (
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
          />
        </FormControl>
      )}
    </FormikField>
  );
}
