import * as React from "react";
import { FastField, FastFieldProps } from "formik";
import {
  InputAdornment,
  Typography,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

interface IBaseProps {
  name?: string;
  config: IConfigurationProps;
  textOnly?: boolean;
  fastFieldProps?: any;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
  formHelperTextProps?: FormHelperTextProps;
}

export type FormikCheckboxInputFieldProps = IBaseProps &
  Omit<CheckboxProps, "name" | "type">;

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

export function CheckboxInputField(props: FormikCheckboxInputFieldProps) {
  const {
    name,
    textOnly,
    fastFieldProps,
    config,
    formControlLabelProps,
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
            <React.Fragment>
              <FormControlLabel
                control={<Checkbox {...field} {...others} />}
                label={label}
                {...formControlLabelProps}
              />
              <FormHelperText error={!isValid} {...formHelperTextProps}>
                {showHintText ? hintText : null}
              </FormHelperText>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
      {...fastFieldProps}
    />
  );
}
