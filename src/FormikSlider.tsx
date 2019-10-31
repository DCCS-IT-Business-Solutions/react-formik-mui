import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FormControl, Slider } from "@material-ui/core";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormControlProps } from "@material-ui/core/FormControl";
import { SliderProps } from "@material-ui/core/Slider";

interface IBaseProps {
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
  formControlProps?: FormControlProps;
}

export type FormikSliderProps = IBaseProps & SliderProps;

const defaultFormControlProps = {
  style: { minWidth: "240px" }
};

export function FormikSlider(props: FormikSliderProps) {
  const {
    name,
    label,
    helperText,
    error,
    formHelperTextProps,
    formControlProps,
    ...others
  } = props;

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <FormControl
          margin="normal"
          {...defaultFormControlProps}
          {...formControlProps}
        >
          <Slider
            {...field}
            onChange={(event: any, value: any) => {
              form.setFieldValue(name, value);
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
        </FormControl>
      )}
    />
  );
}
