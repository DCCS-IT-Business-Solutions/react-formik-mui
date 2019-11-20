import * as React from "react";
import { FastFieldProps } from "formik";
import { IAutocompleteProps, Autocomplete } from "@dccs/react-autocomplete-mui";
import { FormikField } from "./FormikField";
import { getHelperText, hasError } from "./utils";

interface IBaseProps {
  name: string;
  useField?: boolean;
}

export type FormikAutocompleteProps = IBaseProps & IAutocompleteProps;

export function FormikAutocomplete(props: FormikAutocompleteProps) {
  const { name, error, useField, helperText, ...others } = props;

  const defaultProps = {
    margin: "normal" as any,
    style: { minWidth: "240px" }
  };

  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <Autocomplete
          {...defaultProps}
          {...field}
          value={field.value != null ? field.value : ""}
          onOptionSelected={(value: any) => {
            form.setFieldValue(name, value);
          }}
          error={hasError(name, form, error)}
          helperText={getHelperText(name, form, helperText)}
          {...others}
        />
      )}
    </FormikField>
  );
}
