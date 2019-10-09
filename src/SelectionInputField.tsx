import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import {
  InputAdornment,
  Typography,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import FormHelperText, {
  FormHelperTextProps
} from "@material-ui/core/FormHelperText";
import Select, { SelectProps } from "@material-ui/core/Select";

interface IBaseProps {
  config: IConfigurationProps;
  values: any[];
  textOnly?: boolean;
  fastFieldProps?: any;
  type?: "text" | "number" | "password";
  helperText?: string;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikSelectionInputFieldProps = IBaseProps &
  Omit<SelectProps, "name" | "type">;

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

export function SelectionInputField(props: FormikSelectionInputFieldProps) {
  const {
    textOnly,
    config,
    error,
    helperText,
    values,
    formControlProps,
    formHelperTextProps,
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
            <FormControl margin="normal" {...formControlProps}>
              {label && <InputLabel>{label}</InputLabel>}
              <Select
                {...defaultProps}
                {...field}
                //inputProps={customInputProps}
                // Material UI Bug:
                // => || ""  is needed for the label to work properly when Formik-"resetForm" or "handleReset" is used
                value={field.value || ""}
                error={(form.errors && form.errors[name] != null) || error}
                {...others}
              >
                <MenuItem value="">
                  <em>Auswahl aufheben</em>
                </MenuItem>
                {values &&
                  values.map &&
                  values.map((d, idx) => (
                    <MenuItem key={idx} value={d.key}>
                      {d.value}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText error={!isValid} {...formHelperTextProps}>
                {showHintText ? hintText : null}
              </FormHelperText>
            </FormControl>
          )}
        </React.Fragment>
      )}
    />
  );
}
