import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FilePicker, FilePickerProps } from "@dccs/react-filepicker-mui";
import { FormHelperText } from "@material-ui/core";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

interface IBaseProps {
  name: string;
  helperText?: string;
  error?: boolean;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikFormikFilePicker = IBaseProps &
  Omit<FilePickerProps, "value" | "onChange">;

export function FormikFilePicker(props: FormikFormikFilePicker) {
  const { name, error, helperText, formHelperTextProps, ...others } = props;

  const defaultProps = {
    margin: "normal" as any,
    style: { minWidth: "240px" }
  };

  return (
    <FastField
      name={name}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          <FilePicker
            {...defaultProps}
            {...field}
            value={field.value || []}
            onChange={(value: string[]) => {
              form.setFieldValue(name, value);
            }}
            {...others}
          />
          <FormHelperText
            error={(form.errors && form.errors[name] != null) || error}
            {...formHelperTextProps}
          >
            {(form.errors && form.errors[name]) || helperText}
          </FormHelperText>
        </React.Fragment>
      )}
    />
  );
}
