import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FastField, FastFieldProps } from "formik";

interface IBaseProps {
  name: string;
  type?: "text" | "number" | "password";
}

export type FormikTextFieldProps = IBaseProps &
  Omit<TextFieldProps, "name" | "type">;

const defaultProps = {
  margin: "normal" as "normal",
  style: { minWidth: "240px" }
};

export function FormikTextField(props: FormikTextFieldProps) {
  const { name, variant, error, helperText, ...others } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <TextField
          // Quick fix for variant when using typescript
          variant={variant as any}
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
    />
  );
}
