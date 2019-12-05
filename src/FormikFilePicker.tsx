import * as React from "react";
import { FastFieldProps } from "formik";
import { FilePicker, FilePickerProps } from "@dccs/react-filepicker-mui";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import { FormikField } from "./FormikField";

interface IBaseProps {
  name: string;
  helperText?: string;
  error?: boolean;
  useField?: boolean;
  formHelperTextProps?: FormHelperTextProps;
  fieldProps?: {};
  validate?: any;
}

export type FormikFormikFilePicker = IBaseProps &
  Omit<FilePickerProps, "value" | "onChange">;

export function FormikFilePicker(props: FormikFormikFilePicker) {
  const {
    name,
    error,
    useField,
    helperText,
    formHelperTextProps,
    fieldProps,
    validate,
    ...others
  } = props;

  const defaultProps = {
    margin: "normal" as any,
    style: { minWidth: "240px" }
  };

  return (
    <FormikField
      name={name}
      useField={useField}
      validate={validate}
      {...fieldProps}
    >
      {({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FilePicker
            {...defaultProps}
            {...field}
            value={field.value != null ? field.value : []}
            onChange={(value: string[]) => {
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
        </React.Fragment>
      )}
    </FormikField>
  );
}
