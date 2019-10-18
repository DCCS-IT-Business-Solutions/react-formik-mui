import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FormikTextField } from "../src/FormikTextField";
import { FormikAutocomplete } from "../src/FormikAutocomplete";
import { FormikFilePicker } from "../src/FormikFilePicker";
import { FormikDatepicker } from "../src/FormikDatepicker";
import { FormikDateTimepicker } from "../src/FormikDateTimepicker";
// import { MBFSTextField } from "../src/MBFSTextField";
import { Formik, FormikProps, FastField, FastFieldProps } from "formik";
import {
  Button,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography
} from "@material-ui/core";
import { FormikSwitch } from "../src/FormikSwitch";
import { FormikSelect } from "../src/FormikSelect";
import { FormikCheckbox } from "../src/FormikCheckbox";
import { FormikRadio } from "../src/FormikRadio";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
import { FileMetadata } from "@dccs/react-filepicker-mui";
import { reject, resolve } from "q";
import { sleep } from "@dccs/utils";

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
        <br />
        <FormikTextField label="First Name" name="firstName" />
        <br />
        <br />
        Type="number":
        <br />
        <FormikTextField label="Salary" name="salary" type="number" />
        <br />
        <br />
        Multiline:
        <br />
        <FormikTextField label="Multiline" name="multiline" multiline />
        <br />
        <br />
        With helpertext
        <br />
        <FormikTextField
          label="Helpertext"
          name="helpertext"
          helperText="Info"
        />
        <br />
        <br />
        With Error=true and Helpertext
        <br />
        <FormikTextField
          label="Error"
          name="error"
          error={true}
          helperText="Error"
        />
        <br />
        <br />
        Variant Outlined:
        <br />
        <FormikTextField
          label="Variant Outline"
          name="outline"
          variant="outlined"
        />
        <br />
        <br />
        Variant Filled:
        <br />
        <FormikTextField
          label="Variant filled"
          name="filled"
          variant="filled"
        />
        <br />
        <br />
        Type="password":
        <br />
        <FormikTextField label="Password" name="password" type="password" />
        <br />
        <br />
        Input Adornments:
        <br />
        <FormikTextField
          label="Input Adornments"
          name="adornments"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <br />
        <Button type="submit" disabled={formikProps.isSubmitting}>
          Save
        </Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Datepicker with datefns", () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    With DateFnsUtils:
    <Formik
      initialValues={{
        date: "",
        dateTime: ""
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
      render={(formikProps: FormikProps<any>) => (
        <form onSubmit={formikProps.handleSubmit}>
          Default:
          <br />
          <FormikDatepicker name="date" label="Date" />
          <br />
          Date+Time:
          <br />
          <FormikDateTimepicker name="dateTime" label="Date Time" />
          <br />
          <Button type="submit">Save</Button>
          <Button onClick={formikProps.handleReset}>Reset</Button>
        </form>
      )}
    />
  </MuiPickersUtilsProvider>
));

storiesOf("Formik", module).add("Datepicker with moment", () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    With MomentUtils:
    <Formik
      initialValues={{
        date: "",
        dateTime: ""
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
      render={(formikProps: FormikProps<any>) => (
        <form onSubmit={formikProps.handleSubmit}>
          Default:
          <br />
          <FormikDatepicker name="date" label="Date" />
          <br />
          Date+Time:
          <br />
          <FormikDateTimepicker name="dateTime" label="Date Time" />
          <br />
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
      switchBottom: "",
      switchInitialChecked: true
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikSwitch label="Switch" name="switch" />
        <br />
        <br />
        "checked" initially true
        <br />
        <FormikSwitch label="Switch" name="switchInitialChecked" />
        <br />
        <br />
        Label Placement Bottom
        <br />
        <FormikSwitch
          label="Switch Bottom"
          name="switchBottom"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        />
        <br />
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
        <br />
        <FormikSelect
          label="Select"
          name="select"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        />
        <br />
        Without Label:
        <br />
        <FormikSelect
          name="select2"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" }
          ]}
        />
        <br />
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
      checkboxBottom: "",
      checkboxInitialChecked: true
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikCheckbox label="Checkbox" name="checkbox" />
        <br />
        <br />
        "checked" initially true
        <br />
        <FormikCheckbox label="Checkbox" name="checkboxInitialChecked" />
        <br />
        <br />
        Label Placement Bottom
        <br />
        <FormikCheckbox
          label="Checkbox Bottom"
          name="checkboxBottom"
          formControlLabelProps={{ labelPlacement: "bottom" }}
        />
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Radio Buttons", () => (
  <Formik
    initialValues={{
      radioGroup: "",
      radioInitalFemale: "female"
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
        <br />
        <br />
        <br />
        <FormControl>
          <FormLabel>Female set initially</FormLabel>
          <RadioGroup name="radioInitalFemale">
            <FormikRadio
              label="Female"
              name="radioInitalFemale"
              value="female"
            />
            <FormikRadio label="Male" name="radioInitalFemale" value="male" />
            <FormikRadio label="Other" name="radioInitalFemale" value="other" />
            <FormikRadio
              label="(Disabled option)"
              name="radioInitalFemale"
              value="disabled"
              disabled
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

storiesOf("Formik", module).add("Autocomplete", () => (
  <Formik
    initialValues={{
      country: "",
      countryWithInitial: 2
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit} autoComplete="off">
        <FormikAutocomplete
          name="country"
          label="No initial value"
          onLoadOptions={(q: string) => [
            { id: 1, name: "test 1" },
            { id: 2, name: "test 2" },
            { id: 3, name: "test 3" }
          ]}
          textProp={(value: any) => value.id + " " + value.name}
          valueProp={(value: any) => value.id}
        />
        <FormikAutocomplete
          name="countryWithInitial"
          label="Initial value"
          onLoadOptions={(q: string) => [
            { id: 1, name: "test 1" },
            { id: 2, name: "test 2" },
            { id: 3, name: "test 3" }
          ]}
          textProp={value => value.id + " " + value.name}
          valueProp={value => value.id}
        />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

const server: FileMetadata[] = [];
function setServer(data: FileMetadata) {
  server.push(data);
}

function DummyFilePicker() {
  React.useEffect(() => {
    return;
  }, [server.length]);

  const [fileIds, setFileIds] = React.useState<string[]>([]);

  async function uploadFile(newFile: File) {
    await sleep(500);
    const newId = (Math.random() * 1000000000).toString();
    setServer({
      id: newId,
      name: newFile.name,
      size: newFile.size.toString()
    });
    return resolve<string>(newId);
  }

  async function getFile(id: string) {
    await sleep(500);
    window.console.log("searching file", id, "server files", server);
    const file = server.find(e => e.id === id);
    if (file) {
      return resolve<FileMetadata>(file);
    } else {
      return reject<any>("file not found!");
    }
  }

  return (
    <FormikFilePicker
      name="files"
      multiple={true}
      uploadFile={uploadFile}
      getFile={getFile}
    />
  );
}

storiesOf("Formik", module).add("FilePicker", () => (
  <Formik
    initialValues={{
      files: ""
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
    render={(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit} autoComplete="off">
        <DummyFilePicker />
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
        <br />
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
        <br />
        Custom Component with handleChange:
        <br />
        <FastField
          name="custom2"
          render={(fastFieldProps: FastFieldProps<any>) => (
            <React.Fragment>
              {/* Merge FastField-Props into Input */}
              <input
                {...fastFieldProps.field}
                onChange={(e: React.ChangeEvent<any>) => {
                  // Do stuff before HandleChange

                  formikProps.handleChange(e);

                  // Do stuff after HandleChange
                }}
              />

              {/* Show Errormessage after Touch */}
              {formikProps.touched.custom2 ? formikProps.errors.custom2 : null}

              {/* The next line will set a field error to "custom" and is only to demonstrate the error message*/}
              {formikProps.setFieldError("custom2", "Evil Error Message")}
            </React.Fragment>
          )}
        />
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <br />
        For more Information:
        <br />
        <a href="https://jaredpalmer.com/formik/docs/api/fastfield">Formik</a>
      </form>
    )}
  />
));

// Generate Dummy Inital Values

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
                <FormikTextField key={index} label={property} name={property} />
              );
            })}

            <br />
            <Button type="submit">Save</Button>
            <Button onClick={formikProps.handleReset}>Reset</Button>
          </form>
        )}
      />
    )}
  </React.Fragment>
));
