import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FastField, FastFieldProps } from "formik";

export interface BaseProps {
  name: string;
  type?: "text" | "number" | "password";
  fastFieldProps?: any;
}

export type FormikTextFieldProps = BaseProps & TextFieldProps;

export function FormikTextField(props: FormikTextFieldProps) {
  const { name, error, helperText, fastFieldProps, ...others } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" }
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <TextField
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
