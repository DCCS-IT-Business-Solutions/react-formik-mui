/// <reference types="react" />
import { FormikProps } from "formik";
export declare function hasError(name: string, form: FormikProps<any>, error: boolean | undefined): boolean | undefined;
export declare function getHelperText(name: string, form: FormikProps<any>, helperText: React.ReactNode): any;
