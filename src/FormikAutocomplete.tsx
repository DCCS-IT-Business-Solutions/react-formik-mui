import * as React from "react";
import { FastFieldProps } from "formik";
import { FormikField } from "./FormikField";
import { getHelperText, hasError } from "./utils";
import { Autocomplete, AutocompleteProps } from "@dccs/react-autocomplete-mui";
// import TextField, { TextFieldProps } from "@material-ui/core/TextField";

interface IBaseProps {
  name: string;
  error?: boolean;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  useField?: boolean;
  validate?: any;
  fieldProps?: {};
}

export type FormikAutocompleteProps = IBaseProps & AutocompleteProps<any>;

export function FormikAutocomplete(props: FormikAutocompleteProps) {
  const {
    name,
    error,
    helperText,
    label,
    useField,
    textFieldProps,
    validate,
    fieldProps,
    ...others
  } = props;

  const defaultProps = {
    style: { minWidth: "240px" }
  };

  return (
    <FormikField name={name} useField={useField} validate={validate} {...fieldProps}>
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <Autocomplete<any>
            {...field}
            value={field.value != null ? field.value : null}
            onChange={(_: any, value: any) => {
              form.setFieldValue(name, value);
            }}
            textFieldProps={{
              ...defaultProps,
              margin: "normal",
              ...textFieldProps,
              error: hasError(name, form, error),
              helperText: getHelperText(name, form, helperText),
              label,
              ...others
            }}
            {...others}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
