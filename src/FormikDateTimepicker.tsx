import * as React from "react";
import { FastFieldProps } from "formik";
import {
  KeyboardDateTimePicker,
  MuiPickersContext
} from "@material-ui/pickers";
import { KeyboardDateTimePickerProps } from "@material-ui/pickers/DateTimePicker/DateTimePicker";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormikField } from "./FormikField";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  useField?: boolean;
  value?: any;
  onChange?: (date: any, value?: string | null) => void;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikDateTimepickerProps = IBaseProps &
  Omit<KeyboardDateTimePickerProps, "onChange" | "value">;

const defaultProps = {
  margin: "normal" as "normal",
  style: { minWidth: "240px" },
  format: "dd.MM.yyyy HH:mm",
  placeholder: "tt.mm.jjjj",
  autoOk: true,
  ampm: false,
  variant: "inline" as "inline"
};

export function FormikDateTimepicker(props: FormikDateTimepickerProps) {
  const {
    name,
    error,
    useField,
    helperText,
    formHelperTextProps,
    ...others
  } = props;

  // Check context for moment/datefns because formats are different
  const context = React.useContext(MuiPickersContext);

  if (context && context.constructor) {
    if (context.constructor.name === "MomentUtils") {
      defaultProps.format = "DD.MM.YYYY HH:mm";
    }
    if (context.constructor.name === "DateFnsUtils") {
      defaultProps.format = "dd.MM.yyyy HH:mm";
    }
  }
  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <KeyboardDateTimePicker
            {...defaultProps}
            variant="inline"
            {...field}
            value={field.value || null}
            onChange={(date: any) => {
              form.setFieldValue(name, date);
            }}
            {...others}
          />
          <FormHelperTextWrapper
            name={name}
            form={form}
            error={error}
            formHelperTextProps={formHelperTextProps}
            helperText={helperText}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
