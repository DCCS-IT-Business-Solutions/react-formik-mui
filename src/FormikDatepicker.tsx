import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { TextFieldProps } from "@material-ui/core/TextField";

export interface IBaseProps {
  name: string;
  fastFieldProps?: any;
}

export type FormikDatepickerProps = IBaseProps & TextFieldProps;

export function FormikDatepicker(props: FormikDatepickerProps) {
  const {
    name,
    error,
    variant,
    onChange,
    helperText,
    fastFieldProps,
    ...others
  } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" },
    format: "dd.MM.yyyy",
    placeholder: "tt.mm.jjjj",
    cancelLabel: "Schließen",
    clearLabel: "Löschen",
    todayLabel: "Heute",
    okLabel: "OK",
    clearable: true
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <KeyboardDatePicker
          {...defaultProps}
          {...field}
          // Material UI Bug:
          // => || null  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
          value={field.value || null}
          onChange={date => {
            form.setFieldValue(name, date);
          }}
          error={(form.errors && form.errors[name] != null) || error}
          helperText={(form.errors && form.errors[name]) || helperText}
          {...others}
        />
      )}
      {...fastFieldProps}
    />
  );
}
