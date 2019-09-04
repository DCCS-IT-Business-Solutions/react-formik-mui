import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps
} from "@material-ui/pickers";

export interface IBaseProps {
  name: string;
  type?: "text" | "number" | "password";
  fastFieldProps?: any;
}

export type FormikDatepickerProps = IBaseProps & KeyboardDatePickerProps;

export function FormikDatepicker(props: FormikDatepickerProps) {
  const { name, error, helperText, fastFieldProps, ...others } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" }
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <KeyboardDatePicker
          {...defaultProps}
          {...field}
          // Material UI Bug:
          // => || ""  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
          value={field.value || ""}
          error={(form.errors && form.errors[name] != null) || error}
          helperText={(form.errors && form.errors[name]) || helperText}
          {...others}
        />
      )}
      {...fastFieldProps}
    />
  );
}
