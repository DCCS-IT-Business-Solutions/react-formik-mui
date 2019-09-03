import * as React from "react";

import { storiesOf } from "@storybook/react";

import { FormikTextField } from "../src/FormikTextField";
import { Formik, FormikProps, FastField, FastFieldProps } from "formik";
import { Button, InputAdornment } from "@material-ui/core";
import { FormikSwitch } from "../src/FormikSwitch";
import { FormikSelectField } from "../src/FormikSelectField";
import { FormikCheckbox } from "../src/FormikCheckbox";
import AccountCircle from "@material-ui/icons/AccountCircle";

storiesOf("Formik", module).add("TextFields", () => (
  <Formik
    initialValues={{
      firstName: "",
      salary: 0,
      multiline: "",
      helpertext: "",
      error: "",
      outline: "",
      filled: "",
      password: "",
      adornments: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Default:
        <br></br>
        <FormikTextField label="First Name" name="firstName"></FormikTextField>
        <br></br>
        <br></br>
        Type="number":
        <br></br>
        <FormikTextField
          label="Salary"
          name="salary"
          type="number"
        ></FormikTextField>
        <br></br>
        <br></br>
        Multiline:
        <br></br>
        <FormikTextField
          label="Multiline"
          name="multiline"
          multiline
        ></FormikTextField>
        <br></br>
        <br></br>
        With helpertext
        <br></br>
        <FormikTextField
          label="Helpertext"
          name="helpertext"
          helperText="Info"
        ></FormikTextField>
        <br></br>
        <br></br>
        With Error=true and Helpertext
        <br></br>
        <FormikTextField
          label="Error"
          name="error"
          error={true}
          helperText="Error"
        ></FormikTextField>
        <br></br>
        <br></br>
        Variant Outlined:
        <br></br>
        <FormikTextField
          label="Variant Outline"
          name="outline"
          variant="outlined"
        ></FormikTextField>
        <br></br>
        <br></br>
        Variant Filled:
        <br></br>
        <FormikTextField
          label="Variant filled"
          name="filled"
          variant="filled"
        ></FormikTextField>
        <br></br>
        <br></br>
        Type="password":
        <br></br>
        <FormikTextField
          label="Password"
          name="password"
          type="password"
        ></FormikTextField>
        <br></br>
        <br></br>
        Input Adornments:
        <br></br>
        <FormikTextField
          label="Input Adornments"
          name="adornments"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle></AccountCircle>
              </InputAdornment>
            )
          }}
        ></FormikTextField>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Switches", () => (
  <Formik
    initialValues={{
      switch: "",
      switchBottom: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Default:
        <br></br>
        <FormikSwitch label="Switch" name="switch"></FormikSwitch>
        <br></br>
        <br></br>
        Label Placement Bottom
        <br></br>
        <FormikSwitch
          label="Switch Bottom"
          name="switchBottom"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        ></FormikSwitch>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Selects", () => (
  <Formik
    initialValues={{
      select: "",
      select2: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Default:
        <br></br>
        <FormikSelectField
          label="Select"
          name="select"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        ></FormikSelectField>
        <br></br>
        Without Label:
        <br></br>
        <FormikSelectField
          name="select2"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        ></FormikSelectField>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Checkboxes", () => (
  <Formik
    initialValues={{
      checkbox: "",
      checkboxBottom: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Default:
        <br></br>
        <FormikCheckbox label="Checkbox" name="checkbox"></FormikCheckbox>
        <br></br>
        <br></br>
        Label Placement Bottom
        <br></br>
        <FormikCheckbox
          label="Checkbox Bottom"
          name="checkboxBottom"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        ></FormikCheckbox>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Custom Components", () => (
  <Formik
    initialValues={{
      custom: "",
      custom2: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Custom Component:
        <br></br>
        <FastField
          name="custom"
          render={(fastFieldProps: FastFieldProps<any>) => (
            <React.Fragment>
              {/* Merge FastField-Props into Input */}
              <input {...fastFieldProps.field} />

              {/* Show Errormessage after Touch */}
              {formikProps.touched.custom ? formikProps.errors.custom : null}

              {/* The next line will set a field error to "custom" and is only to demonstrate the error message*/}
              {formikProps.setFieldError("custom", "Evil Error Message")}
            </React.Fragment>
          )}
        />
        <br></br>
        Custom Component with handleChange:
        <br></br>
        <FastField
          name="custom2"
          render={(fastFieldProps: FastFieldProps<any>) => (
            <React.Fragment>
              {/* Merge FastField-Props into Input */}
              <input
                {...fastFieldProps.field}
                onChange={(e: React.ChangeEvent<any>) => {
                  //Do stuff before HandleChange

                  formikProps.handleChange(e);

                  //Do stuff after HandleChange
                }}
              />

              {/* Show Errormessage after Touch */}
              {formikProps.touched.custom2 ? formikProps.errors.custom2 : null}

              {/* The next line will set a field error to "custom" and is only to demonstrate the error message*/}
              {formikProps.setFieldError("custom2", "Evil Error Message")}
            </React.Fragment>
          )}
        />
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
        <br></br>
        For more Information:
        <br></br>
        <a href="https://jaredpalmer.com/formik/docs/api/fastfield">Formik</a>
      </form>
    )}
  />
));
