import * as React from "react";
export interface IFormikFieldProps {
    name: string;
    useField?: boolean;
    validate?: any;
}
export declare const FormikField: React.FunctionComponent<IFormikFieldProps>;
