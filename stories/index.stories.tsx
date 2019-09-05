import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FormikTextField } from "../src/FormikTextField";
import { FormikDatepicker } from "../src/FormikDatepicker";
//import { MBFSTextField } from "../src/MBFSTextField";
import { Formik, FormikProps, FastField, FastFieldProps } from "formik";
import {
  Button,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup
} from "@material-ui/core";
import { FormikSwitch } from "../src/FormikSwitch";
import { FormikSelect } from "../src/FormikSelect";
import { FormikCheckbox } from "../src/FormikCheckbox";
import { FormikRadio } from "../src/FormikRadio";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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
      <form onSubmit={formikProps.handleSubmit}>
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
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Datepicker", () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Formik
      initialValues={{
        date: ""
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
      render={(formikProps: FormikProps<any>) => (
        <form onSubmit={formikProps.handleSubmit}>
          Default:
          <br></br>
          <FormikDatepicker name="date" label="Date"></FormikDatepicker>
          <br></br>
          <Button type="submit">Save</Button>
          <Button onClick={formikProps.handleReset}>Reset</Button>
        </form>
      )}
    />
  </MuiPickersUtilsProvider>
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
      <form onSubmit={formikProps.handleSubmit}>
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
        <Button onClick={formikProps.handleReset}>Reset</Button>
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
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br></br>
        <FormikSelect
          label="Select"
          name="select"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        ></FormikSelect>
        <br></br>
        Without Label:
        <br></br>
        <FormikSelect
          name="select2"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        ></FormikSelect>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
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
      <form onSubmit={formikProps.handleSubmit}>
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
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Radio Buttons", () => (
  <Formik
    initialValues={{
      radioGroup: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="radioGroup">
            <FormikRadio label="Female" name="radioGroup" value="female" />
            <FormikRadio label="Male" name="radioGroup" value="male" />
            <FormikRadio label="Other" name="radioGroup" value="other" />
            <FormikRadio
              label="(Disabled option)"
              name="radioGroup"
              value="disabled"
              disabled
            />
          </RadioGroup>
        </FormControl>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
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
      <form onSubmit={formikProps.handleSubmit}>
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
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <br></br>
        For more Information:
        <br></br>
        <a href="https://jaredpalmer.com/formik/docs/api/fastfield">Formik</a>
      </form>
    )}
  />
));

//Generate Dummy Inital Values

const initialValues = {} as any;

for (let i = 1; i <= 500; i++) {
  initialValues["textField" + i.toString()] = "";
}

storiesOf("Formik", module).add("Huge Form", () => (
  <React.Fragment>
    {initialValues && (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          });
        }}
        render={(formikProps: FormikProps<any>) => (
          <form onSubmit={formikProps.handleSubmit}>
            {Object.keys(formikProps.initialValues).map((property, index) => {
              return (
                <FormikTextField
                  label={property}
                  name={property}
                ></FormikTextField>
              );
            })}

            <br></br>
            <Button type="submit">Save</Button>
            <Button onClick={formikProps.handleReset}>Reset</Button>
          </form>
        )}
      />
    )}
  </React.Fragment>
));
