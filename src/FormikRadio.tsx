import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FormControlLabel, FormHelperText, Radio } from "@material-ui/core";
import { RadioProps } from "@material-ui/core/Radio";

export interface IFormikRadioProps extends RadioProps {
  name: string;
  value: any;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: any; // any because the interface FormControlLabelProps has required properties
  fastFieldProps?: any;
}

export function FormikRadio(props: IFormikRadioProps) {
  const {
    name,
    label,
    helperText,
    error,
    formControlLabelProps,
    fastFieldProps,
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
          <FormHelperText
            error={(form.errors && form.errors[name] != null) || error}
          >
            {(form.errors && form.errors[name]) || helperText}
          </FormHelperText>
        </React.Fragment>
      )}
      {...fastFieldProps}
    />
  );
}
