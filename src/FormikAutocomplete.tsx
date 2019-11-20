import * as React from "react";
import { FastFieldProps } from "formik";
import Autocomplete, {
  AutocompleteProps,
  RenderInputParams
} from "@material-ui/lab/Autocomplete";
import { FormikField } from "./FormikField";
import { getHelperText, hasError } from "./utils";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

interface IBaseProps {
  name: string;
  options: any[];
  useField?: boolean;
  autocompleteProps?: AutocompleteProps;
}

export type FormikAutocompleteProps = IBaseProps &
  Omit<TextFieldProps, "name" | "type">;

export function FormikAutocomplete(props: FormikAutocompleteProps) {
  const {
    name,
    options,
    autocompleteProps,
    useField,
    variant,
    error,
    helperText,
    ...others
  } = props;

  const defaultProps = {
    margin: "normal" as any,
    style: { minWidth: "240px" }
  };

  return (
    <FormikField name={name} useField={useField}>
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <Autocomplete
            // TODO: KeyPropFn & valuePropFn
            value={options.find(element => element.key === field.value)}
            onChange={(event: any, value: any) => {
              if (value != null) {
                form.setFieldValue(name, value.key);
              } else {
                form.setFieldValue(name, "");
              }
            }}
            // TODO: Touched setzen für Error Message
            // TODO: Async testen
            options={options}
            getOptionLabel={(option: any) => option.value}
            renderInput={(params: RenderInputParams) => {
              return (
                <TextField
                  {...params}
                  variant={variant as any}
                  {...defaultProps}
                  error={hasError(name, form, error)}
                  helperText={getHelperText(name, form, helperText)}
                  {...others}
                />
              );
            }}
            {...autocompleteProps}
          />
        </React.Fragment>
      )}
    </FormikField>
  );
}
