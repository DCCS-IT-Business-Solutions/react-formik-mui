import * as React from "react";
import { SelectProps } from "@material-ui/core/Select";
import { FormControlProps } from "@material-ui/core/FormControl";
import { FastFieldProps } from "formik";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import { SearchableSelect } from "@dccs/react-searchable-select-mui";
import { FormikField } from "./FormikField";
import { hasError, getHelperText } from "./utils";

interface IBaseProps {
  name: string;
  options: any[];
  label?: string;
  helperText?: string;
  useField?: boolean;
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
    useField,
    formControlProps,
    formHelperTextProps,
    ...others
  } = props;

  const defaultProps = {
    style: { minWidth: "240px" }
  };

  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <SearchableSelect
            {...defaultProps}
            {...field}
            label={label}
            formControlProps={formControlProps}
            formHelperTextProps={formHelperTextProps}
            value={field.value != null ? field.value : ""}
            options={options}
            error={hasError(name, form, error)}
            helperText={getHelperText(name, form, helperText) as any}
            {...others}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
