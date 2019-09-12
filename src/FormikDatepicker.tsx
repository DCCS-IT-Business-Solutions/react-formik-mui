import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { KeyboardDatePickerProps } from "@material-ui/pickers/DatePicker/DatePicker";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  value?: any;
  onChange?: (date: any, value?: string | null) => void;
}

export type FormikDatepickerProps = IBaseProps &
  Omit<KeyboardDatePickerProps, "onChange" | "value">;

export function FormikDatepicker(props: FormikDatepickerProps) {
  const { name, error, helperText, ...others } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" },
    format: "dd.MM.yyyy",
    placeholder: "tt.mm.jjjj",
    clearable: true,
    autoOk: true,
    variant: "inline" as any
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
    />
  );
}
