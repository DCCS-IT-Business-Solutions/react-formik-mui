import * as React from "react";
import { FastFieldProps } from "formik";
import { FormControlLabel, Radio } from "@material-ui/core";
import { RadioProps } from "@material-ui/core/Radio";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormHelperTextWrapper, {
  IFormHelperTextWrapperProps
} from "./FormHelperTextWrapper";
import { FormikField } from "./FormikField";

interface IBaseProps {
  name: string;
  value: any;
  label?: React.ReactNode;
  helperText?: string;
  error?: boolean;
  useField?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
  formHelperTextWrapperProps?: IFormHelperTextWrapperProps;
  fieldProps?: {};
  validate?: any;
}

export type FormikRadioProps = IBaseProps & RadioProps;

export function FormikRadio(props: FormikRadioProps) {
  const {
    name,
    label,
    helperText,
    error,
    useField,
    formControlLabelProps,
    formHelperTextProps,
    formHelperTextWrapperProps,
    fieldProps,
    validate,
    value,
    ...others
  } = props;

  return (
    <FormikField
      name={name}
      useField={useField}
      validate={validate}
      {...fieldProps}
    >
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FormControlLabel
            control={
              <Radio
                {...field}
                value={value}
                checked={field.value === value}
                {...others}
              />
            }
            label={label}
            {...formControlLabelProps}
          />
          <FormHelperTextWrapper
            name={name}
            form={form}
            error={error}
            formHelperTextProps={formHelperTextProps}
            helperText={helperText}
            {...formHelperTextWrapperProps}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
