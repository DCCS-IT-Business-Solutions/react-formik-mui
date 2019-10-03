import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { KeyboardDateTimePickerProps } from "@material-ui/pickers/DateTimePicker/DateTimePicker";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  value?: any;
  onChange?: (date: any, value?: string | null) => void;
}

export type FormikDateTimepickerProps = IBaseProps &
  Omit<KeyboardDateTimePickerProps, "onChange" | "value">;

export function FormikDateTimepicker(props: FormikDateTimepickerProps) {
  const { name, error, helperText, ...others } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" },
    format: "dd.MM.yyyy HH:mm",
    placeholder: "tt.mm.jjjj",
    clearable: true,
    autoOk: true,
    variant: "inline" as any,
    ampm: false
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <KeyboardDateTimePicker
          {...defaultProps}
          {...field}
          // Material UI Bug:
          // => || null  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
          value={field.value || null}
          onChange={(date: any) => {
            // if (date instanceof Date && !isNaN(date as any)) {
            form.setFieldValue(name, date);
          }}
          error={(form.errors && form.errors[name] != null) || error}
          helperText={(form.errors && form.errors[name]) || helperText}
          {...others}
        />
      )}
    />
  );
}
