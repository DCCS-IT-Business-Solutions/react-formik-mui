import * as React from "react";
import { FastField, Field } from "formik";

export interface IFormikFieldProps {
  name: string;
  useField?: boolean;
}

export const FormikField: React.FunctionComponent<IFormikFieldProps> = props => {
  const { name, useField, children } = props;

  if (useField) {
    return <Field name={name}>{children}</Field>;
  } else {
    return <FastField name={name}>{children}</FastField>;
  }
};
