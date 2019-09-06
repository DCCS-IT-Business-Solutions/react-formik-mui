import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { IAutocompleteProps, Autocomplete } from "@dccs/react-autocomplete-mui";

interface IBaseProps {
  name: string;
  fastFieldProps?: FastFieldProps;
}

export type FormikAutocompleteProps = IBaseProps & IAutocompleteProps;

export function FormikAutocomplete(props: FormikAutocompleteProps) {
  const { name, error, helperText, fastFieldProps, ...others } = props;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" }
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <Autocomplete
          {...defaultProps}
          {...field}
          value={field.value || ""}
          onOptionSelected={(value: any) => {
            form.setFieldValue(name, value);
          }}
          error={(form.errors && form.errors[name] != null) || error}
          helperText={(form.errors && form.errors[name]) || helperText}
          {...others}
        />
      )}
      {...fastFieldProps}
    />
  );
}
