import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText, Radio } from "@material-ui/core";
import { RadioProps } from "@material-ui/core/Radio";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

interface IBaseProps {
  name: string;
  value: any;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
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
    ...others
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FormControlLabel
            control={<Radio {...field} {...others} />}
            label={label}
            {...formControlLabelProps}
          />
          {((form.errors && form.errors[name]) || helperText) && (
            <FormHelperText
              error={(form.errors && form.errors[name] != null) || error}
              {...formHelperTextProps}
            ></FormHelperText>
          )}
        </React.Fragment>
      )}
    />
  );
}
