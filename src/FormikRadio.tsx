import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, Radio } from "@material-ui/core";
import { RadioProps } from "@material-ui/core/Radio";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormHelperTextWrapper, {
  IFormHelperTextWrapperProps
} from "./FormHelperTextWrapper";

interface IBaseProps {
  name: string;
  value: any;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
  formHelperTextWrapperProps?: IFormHelperTextWrapperProps;
}

export type FormikRadioProps = IBaseProps & RadioProps;

export function FormikRadio(props: FormikRadioProps) {
  const {
    name,
    label,
    helperText,
    error,
    formControlLabelProps,
    formHelperTextProps,
    formHelperTextWrapperProps,
    value,
    ...others
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
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
            showEmptyFormHelperText={false} // prevent space between Radios without errors
            formHelperTextProps={formHelperTextProps}
            helperText={helperText}
            {...formHelperTextWrapperProps}
          />
        </React.Fragment>
      )}
    />
  );
}
