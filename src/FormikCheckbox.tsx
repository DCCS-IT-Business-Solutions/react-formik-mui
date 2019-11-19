import * as React from "react";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { FastFieldProps } from "formik";
import { FormControlLabel, FormControl } from "@material-ui/core";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
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
  formHelperTextProps?: FormHelperTextProps;
  formControlProps?: FormControlProps;
}

export type FormikCheckboxProps = IBaseProps & CheckboxProps;

export function FormikCheckbox(props: FormikCheckboxProps) {
  const {
    name,
    label,
    helperText,
    error,
    useField,
    formControlLabelProps,
    formHelperTextProps,
    formControlProps,
    ...others
  } = props;

  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <FormControl margin="normal" {...formControlProps}>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={field.value ? field.value : false}
                {...others}
              />
            }
            label={label}
            {...formControlLabelProps}
          />
          <FormHelperTextWrapper
            name={name}
            form={form}
            error={error}
            formHelperTextProps={formHelperTextProps}
            helperText={helperText}
          />
        </FormControl>
      )}
    </FormikField>
  );
}
