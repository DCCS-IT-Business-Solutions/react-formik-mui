import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import { FilePicker, FilePickerProps } from "@dccs/react-filepicker-mui";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
import FormHelperTextWrapper from "./FormHelperTextWrapper";

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
          <FormHelperTextWrapper
            name={name}
            form={form}
            error={error}
            formHelperTextProps={formHelperTextProps}
            helperText={helperText}
          ></FormHelperTextWrapper>
        </React.Fragment>
      )}
    />
  );
}
