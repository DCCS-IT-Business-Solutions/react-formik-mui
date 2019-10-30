import * as React from "react";
import Select, { SelectProps } from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FastField, FastFieldProps } from "formik";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";

interface IBaseProps {
  name: string;
  options: any[];
  label?: string;
  helperText?: string;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikSelectProps = IBaseProps & SelectProps;

export function FormikSelect(props: FormikSelectProps) {
  const {
    label,
    name,
    error,
    helperText,
    options,
    formControlProps,
    formHelperTextProps,
    ...others
  } = props;

  const defaultProps = {
    style: { minWidth: "240px" }
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <FormControl margin="normal" {...formControlProps}>
          {label && <InputLabel>{label}</InputLabel>}
          <Select
            {...defaultProps}
            {...field}
            // Material UI Bug:
            // => || ""  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
            value={field.value || ""}
            error={(form.errors && form.errors[name] != null) || error}
            {...others}
          >
            <MenuItem value="">
              <em>Auswahl aufheben</em>
            </MenuItem>
            {options &&
              options.map &&
              options.map((d, idx) => (
                <MenuItem key={idx} value={d.key}>
                  {d.value}
                </MenuItem>
              ))}
          </Select>
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
