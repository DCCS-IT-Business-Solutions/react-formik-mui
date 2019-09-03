import React from "react";
import Select, { SelectProps } from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FastField } from "formik";
import { FormHelperText } from "@material-ui/core";

interface Props extends SelectProps {
  label: any;
  name: string;
  errorText?: string;
  options: any[];
  tabIndex?: number;
}

export function FormikSelectField(props: Props) {
  const { label, name, errorText, options, tabIndex = 0, ...others } = props;

  const defaultStyle = {
    minWidth: "182px",
    marginRight: "5px"
  };

  return (
    <FastField
      name={name}
      render={({ field }: any) => (
        <FormControl margin="normal">
          <InputLabel>{label}</InputLabel>
          <Select
            InputProps={{ inputProps: { tabIndex } }}
            error={errorText && errorText.length > 0}
            {...field}
            value={field.value || ""} // Braucht material ui
            style={defaultStyle}
            {...others}
          >
            <MenuItem value="">
              <em>Auswahl aufheben</em>
            </MenuItem>
            {options &&
              options.map &&
              options.map((d, idx) => (
                <MenuItem key={idx} value={d.key}>
                  {d.value}
                </MenuItem>
              ))}
          </Select>
          {errorText && errorText.length > 0 && (
            <FormHelperText error={true}>
              {errorText && errorText.length > 0 && errorText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
