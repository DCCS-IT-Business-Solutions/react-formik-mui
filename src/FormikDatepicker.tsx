import * as React from "react";
import { FastFieldProps } from "formik";
import { KeyboardDatePicker, MuiPickersContext } from "@material-ui/pickers";
import { KeyboardDatePickerProps } from "@material-ui/pickers/DatePicker/DatePicker";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormikField } from "./FormikField";
import { hasError, getHelperText } from "./utils";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  useField?: boolean;
  value?: any;
  onChange?: (date: any, value?: string | null) => void;
  formHelperTextProps?: FormHelperTextProps;
  fieldProps?: {};
  validate?: any;
}

export type FormikDatepickerProps = IBaseProps &
  Omit<KeyboardDatePickerProps, "onChange" | "value">;

const defaultProps = {
  margin: "normal" as "normal",
  style: { minWidth: "240px" },
  placeholder: "tt.mm.jjjj",
  format: "dd.MM.yyyy",
  autoOk: true,
  variant: "inline" as "inline"
};

export function FormikDatepicker(props: FormikDatepickerProps) {
  const {
    name,
    error,
    useField,
    helperText,
    formHelperTextProps,
    fieldProps,
    validate,
    ...others
  } = props;

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
    <FormikField
      name={name}
      useField={useField}
      validate={validate}
      {...fieldProps}
    >
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <KeyboardDatePicker
            {...defaultProps}
            {...field}
            value={field.value || null}
            onChange={date => {
              form.setFieldValue(name, date);
            }}
            error={hasError(name, form, error)}
            helperText={getHelperText(name, form, helperText)}
            {...others}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
