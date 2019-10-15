import * as React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FastField, FastFieldProps } from "formik";
import { InputAdornment, Typography } from "@material-ui/core";

interface IBaseProps {
  name?: string;
  config: IConfigurationProps;
  textOnly?: boolean;
  fastFieldProps?: any;
  type?: "text" | "number" | "password";
}

export type FormikBasicInputFieldProps = IBaseProps &
  Omit<TextFieldProps, "name" | "type">;

interface IConfigurationProps {
  notifyOnValueChanged: boolean;
  symbol: React.ReactNode;
  prependSymbol: boolean;
  readOnly: boolean;
  label: string;
  clientId: string;
  visible: boolean;
  showHintText: boolean;
  hintText: string;
  isValid: boolean;
}

export function BasicInputField(props: FormikBasicInputFieldProps) {
  const {
    name,
    textOnly,
    error,
    helperText,
    fastFieldProps,
    config,
    ...others
  } = props;

  const {
    symbol,
    prependSymbol,
    readOnly,
    label,
    clientId,
    visible,
    showHintText,
    hintText,
    isValid
  } = config;

  const defaultProps = {
    margin: "normal" as "normal",
    style: { minWidth: "240px" }
  };

  if (!visible) {
    return null;
  }

  const customInputProps = {
    readOnly
  } as any;

  if (symbol && prependSymbol) {
    customInputProps.endAdornment = (
      <InputAdornment position="end">{symbol}</InputAdornment>
    );
  } else {
    customInputProps.startAdornment = (
      <InputAdornment position="start">{symbol}</InputAdornment>
    );
  }

  return (
    <FastField
      name={`${clientId}.value`}
      render={({ field, form }: FastFieldProps<any>) => (
        <React.Fragment>
          {textOnly && <Typography variant="body1">{field.value}</Typography>}
          {!textOnly && (
            <TextField
              {...defaultProps}
              {...field}
              type={isNaN(field.value) ? "text" : "number"}
              label={label}
              id={clientId}
              InputProps={customInputProps}
              // Material UI Bug:
              // => || ""  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
              value={field.value || ""}
              error={!isValid}
              helperText={showHintText ? hintText : null}
              {...(others as any)}
            />
          )}
        </React.Fragment>
      )}
      {...fastFieldProps}
    />
  );
}