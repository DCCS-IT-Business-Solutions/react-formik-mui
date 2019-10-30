import * as React from "react";
import { SelectProps } from "@material-ui/core/Select";
import { FormControlProps } from "@material-ui/core/FormControl";
import { FastField, FastFieldProps } from "formik";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { SearchableSelect } from "@dccs/react-searchable-select-mui";

interface IBaseProps {
  name: string;
  options: any[];
  label?: string;
  helperText?: string;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikSearchableSelectProps = IBaseProps & SelectProps;

export function FormikSearchableSelect(props: FormikSearchableSelectProps) {
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
        <React.Fragment>
          <SearchableSelect
            {...defaultProps}
            {...field}
            label={label}
            formControlProps={formControlProps}
            formHelperTextProps={formHelperTextProps}
            // Material UI Bug:
            // => || ""  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
            value={field.value || ""}
            options={options}
            error={(form.errors && form.errors[name] != null) || error}
            helperText={
              (form.errors && (form.errors[name] as any)) || helperText
            }
            {...others}
          />
        </React.Fragment>
      )}
    />
  );
}
