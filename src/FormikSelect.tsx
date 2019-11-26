import * as React from "react";
import Select, { SelectProps } from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FastFieldProps } from "formik";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormikField } from "./FormikField";
import { hasError } from "./utils";

interface IBaseProps {
  name: string;
  options: any[];
  hideRemoveSelection?: boolean;
  removeSelectionText?: string;
  label?: string;
  useField?: boolean;
  helperText?: string;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikSelectProps = IBaseProps & SelectProps;

const defaultProps = {
  style: { minWidth: "240px" }
};

const defaultRemoveSelectionText = "";

export function FormikSelect(props: FormikSelectProps) {
  const {
    label,
    name,
    error,
    helperText,
    useField,
    options,
    formControlProps,
    formHelperTextProps,
    hideRemoveSelection,
    removeSelectionText,
    ...others
  } = props;

  const removeSelection = removeSelectionText || defaultRemoveSelectionText;

  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <FormControl margin="normal" {...formControlProps}>
          {label && <InputLabel>{label}</InputLabel>}
          <Select
            {...defaultProps}
            {...field}
            value={field.value != null ? field.value : ""}
            error={hasError(name, form, error)}
            {...others}
          >
            {hideRemoveSelection !== true && (
              <MenuItem style={{ minHeight: "30px" }} value="">
                <em>{removeSelection}</em>
              </MenuItem>
            )}
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
    </FormikField>
  );
}
