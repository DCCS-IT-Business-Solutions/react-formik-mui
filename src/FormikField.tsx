import * as React from "react";
import { FastField, Field } from "formik";

export interface IFormikFieldProps {
  name: string;
  useField?: boolean;
  validate?: any;
}

export const FormikField: React.FunctionComponent<IFormikFieldProps> = props => {
  const { name, useField, validate, children } = props;

  if (useField) {
    return (
      <Field name={name} validate={validate}>
        {children}
      </Field>
    );
  } else {
    return (
      <FastField name={name} validate={validate}>
        {children}
      </FastField>
    );
  }
};
