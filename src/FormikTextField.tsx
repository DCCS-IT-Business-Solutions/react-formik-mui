import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FastFieldProps } from "formik";
import { FormikField } from "./FormikField";
import { hasError, getHelperText } from "./utils";

interface IBaseProps {
  name: string;
  type?: "text" | "number" | "password";
  useField?: boolean;
}

export type FormikTextFieldProps = IBaseProps &
  Omit<TextFieldProps, "name" | "type">;

const defaultProps = {
  margin: "normal" as "normal",
  style: { minWidth: "240px" }
};

export function FormikTextField(props: FormikTextFieldProps) {
  const { name, useField, variant, error, helperText, ...others } = props;

  return (
    <FormikField name={name} useField={useField}>
      {({ form, field }: FastFieldProps<any>) => (
        <TextField
          variant={variant as any}
          {...defaultProps}
          {...field}
          value={field.value != null ? field.value : ""}
          error={hasError(name, form, error)}
          helperText={getHelperText(name, form, helperText)}
          {...others}
        />
      )}
    </FormikField>
  );
}
