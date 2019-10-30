/// <reference types="react" />
import { FormikProps } from "formik";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";
export interface IFormHelperTextWrapperProps {
    name: string;
    form: FormikProps<any>;
    error?: boolean;
    helperText?: string;
    formHelperTextProps?: FormHelperTextProps;
    showEmptyFormHelperText?: boolean;
}
declare function FormHelperTextWrapper(props: IFormHelperTextWrapperProps): JSX.Element | null;
declare namespace FormHelperTextWrapper {
    var defaultProps: {
        showEmptyFormHelperText: boolean;
    };
    var displayName: string;
    var __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "name": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "form": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "error": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "helperText": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "formHelperTextProps": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "showEmptyFormHelperText": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
}
export default FormHelperTextWrapper;
