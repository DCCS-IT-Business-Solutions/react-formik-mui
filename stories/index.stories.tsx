import * as React from "react";

import { storiesOf } from "@storybook/react";

import { FormikTextField } from "../src/FormikTextField";
import { Formik, FormikProps } from "formik";
import { Button, InputAdornment } from "@material-ui/core";
import { FormikSwitch } from "../src/FormikSwitch";
import { FormikCheckbox } from "../src/FormikCheckbox";

storiesOf("Formik", module).add("all", () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      salary: 0,
      multiline: "",
      switch: false,
      checkbox: false
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });

      actions.setFieldError("salary", "Testerror");

      actions.setFieldError("switch", "Switcherror");

      actions.setFieldError("checkbox", "Checkboxerror");
    }}
    render={(formikProps: FormikProps<any>) => (
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Formular :)
        <br></br>
        <FormikTextField label="Vorname" name="firstName"></FormikTextField>
        <br></br>
        <FormikTextField label="Nachname" name="lastName"></FormikTextField>
        <br></br>
        <FormikTextField label="E-Mail" name="email"></FormikTextField>
        <br></br>
        <FormikTextField
          label="Gehalt"
          name="salary"
          type="number"
          helperText="testomatiko"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Multiline"
          name="multiline"
          multiline
          error
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Helpertext"
          name="helpertext"
          helperText="Info"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Error"
          name="error"
          error={true}
          helperText="Error"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Variant Outline"
          name="outline"
          variant="outlined"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Variant filled"
          name="filled"
          variant="filled"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="password"
          name="password"
          type="password"
        ></FormikTextField>
        <br></br>
        <FormikTextField
          label="Input Adornments"
          name="adornsments"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">ICON</InputAdornment>
            )
          }}
        ></FormikTextField>
        <br></br>
        <FormikSwitch label="Switch" name="switch"></FormikSwitch>
        <br></br>
        <FormikSwitch
          label="Switch Bottom"
          name="switch"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        ></FormikSwitch>
        <br></br>
        <FormikCheckbox label="Checkbox" name="checkbox"></FormikCheckbox>
        <br></br>
        <FormikCheckbox
          label="Checkbox Bottom"
          name="checkbox"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        ></FormikCheckbox>
        <br></br>
        <Button type="submit">Speichern</Button>
        <Button onClick={formikProps.resetForm}>Reset</Button>
      </form>
    )}
  />
));
