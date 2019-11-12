import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { KeyboardDatePicker, MuiPickersContext } from "@material-ui/pickers";
import { KeyboardDatePickerProps } from "@material-ui/pickers/DatePicker/DatePicker";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  value?: any;
  onChange?: (date: any, value?: string | null) => void;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikDatepickerProps = IBaseProps &
  Omit<KeyboardDatePickerProps, "onChange" | "value">;

const defaultProps = {
  margin: "normal" as "normal",
  style: { minWidth: "240px" },
  placeholder: "tt.mm.jjjj",
  format: "dd.MM.yyyy",
  clearable: true,
  autoOk: true,
  variant: "inline" as any
};

export function FormikDatepicker(props: FormikDatepickerProps) {
  const { name, error, helperText, formHelperTextProps, ...others } = props;

  // Check context for moment/datefns because formats are different
  const context = React.useContext(MuiPickersContext);

  if (context && context.constructor) {
    if (context.constructor.name === "MomentUtils") {
      defaultProps.format = "DD.MM.YYYY";
    }
    if (context.constructor.name === "DateFnsUtils") {
      defaultProps.format = "dd.MM.yyyy";
    }
  }

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <KeyboardDatePicker
            {...defaultProps}
            {...field}
            value={field.value || null}
            onChange={date => {
              form.setFieldValue(name, date);
            }}
            error={(form.errors && form.errors[name] != null) || error}
            helperText={(form.errors && form.errors[name]) || helperText}
            {...others}
          />
        </React.Fragment>
      )}
    />
  );
}
