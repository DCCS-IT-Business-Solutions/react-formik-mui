import * as React from "react";

import { storiesOf } from "@storybook/react";
import { FormikTextField } from "../src/FormikTextField";
import { FormikAutocomplete } from "../src/FormikAutocomplete";
import { FormikDatepicker } from "../src/FormikDatepicker";
import { FormikSlider } from "../src/FormikSlider";
import { FormikDateTimepicker } from "../src/FormikDateTimepicker";
// import { MBFSTextField } from "../src/MBFSTextField";
import { Formik, FormikProps, FastField, FastFieldProps } from "formik";
import {
  Button,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";
import { FormikSwitch } from "../src/FormikSwitch";
import { FormikSelect } from "../src/FormikSelect";
import { FormikSearchableSelect } from "../src/FormikSearchableSelect";
import { FormikCheckbox } from "../src/FormikCheckbox";
import { FormikRadio } from "../src/FormikRadio";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
import { FileMetadata } from "@dccs/react-filepicker-mui";

// Synchronous validation function
const validate = (value: any) => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

storiesOf("Formik", module).add("TextFields", () => (
  <Formik
    initialValues={{
      firstName: "",
      salary: "",
      multiline: "",
      helpertext: "",
      error: "",
      outline: "",
      filled: "",
      password: "",
      adornments: "",
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
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
        Use Set Error Button
        <br />
        <FormikTextField label="Error" name="error" />
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
        Field level Validation (email)
        <br />
        <FormikTextField name="email" validate={validate} />
        <br />
        <FormikTextField name="email2" fieldProps={{ validate }} />
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
            ),
          }}
        />
        <br />
        <Button type="submit" disabled={formikProps.isSubmitting}>
          Save
        </Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <Button
          onClick={() => {
            formikProps.setFieldError("error", "Error");
          }}
        >
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Datepicker with datefns", () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    With DateFnsUtils:
    <Formik
      initialValues={{
        date: "",
        dateTime: "",
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {(formikProps: FormikProps<any>) => (
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
          <Button
            onClick={() => {
              formikProps.setFieldError("date", "Error");
              formikProps.setFieldError("dateTime", "Error");
            }}
          >
            Set Error
          </Button>
        </form>
      )}
    </Formik>
  </MuiPickersUtilsProvider>
));

storiesOf("Formik", module).add("Datepicker with moment", () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    With MomentUtils:
    <Formik
      initialValues={{
        date: "",
        dateTime: "",
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {(formikProps: FormikProps<any>) => (
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
          <Button onClick={() => formikProps.setFieldError("date", "Error")}>
            Set Error
          </Button>
        </form>
      )}
    </Formik>
  </MuiPickersUtilsProvider>
));

storiesOf("Formik", module).add("Switches", () => (
  <Formik
    initialValues={{
      switch: "",
      switchBottom: "",
      switchInitialChecked: true,
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
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
        <Button onClick={() => formikProps.setFieldError("switch", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Selects", () => (
  <Formik
    initialValues={{
      select: "",
      select2: "",
      select3: 2,
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikSelect
          label="Select"
          name="select"
          options={[
            { key: 0, value: "Entry 0" },
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        Initial Value Set to 2:
        <br />
        <FormikSelect
          label="Select"
          name="select3"
          options={[
            { key: 0, value: "Entry 0" },
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        Hidden 'Remove Selection Text':
        <br />
        <FormikSelect
          label="Select"
          name="select3"
          hideRemoveSelection={true}
          options={[
            { key: 0, value: "Entry 0" },
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        Different Text for Remove Selection
        <br />
        <FormikSelect
          label="Select"
          name="select3"
          removeSelectionText="Remooooooovious Selectious"
          options={[
            { key: 0, value: "Entry 0" },
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
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
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <Button onClick={() => formikProps.setFieldError("select", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Searchable Selects", () => (
  <Formik
    initialValues={{
      select: "",
      select2: "",
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikSearchableSelect
          label="Select"
          name="select"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        Without Label:
        <br />
        <FormikSearchableSelect
          name="select2"
          options={[
            { key: 1, value: "Entry 1" },
            { key: 2, value: "Entry 2" },
            { key: 3, value: "Entry 3" },
          ]}
        />
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <Button onClick={() => formikProps.setFieldError("select", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Checkboxes", () => (
  <Formik
    initialValues={{
      checkbox: "",
      checkboxBottom: "",
      checkboxInitialChecked: true,
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikCheckbox
          label="Checkbox"
          name="checkbox"
          helperText="Im helping!"
        />
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
        <Button onClick={() => formikProps.setFieldError("checkbox", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Radio Buttons", () => (
  <Formik
    initialValues={{
      radioGroup: "",
      radioInitalFemale: "female",
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
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
        <Button
          onClick={() => formikProps.setFieldError("radioGroup", "Error")}
        >
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

const films = [
  { value: "The Shawshank Redemption", key: 1 },
  { value: "The Godfather", key: 2 },
  { value: "The Godfather: Part II", key: 3 },
  { value: "The Dark Knight", key: 4 },
  { value: "12 Angry Men", key: 5 },
  { value: "Schindler's List", key: 6 },
];

storiesOf("Formik", module).add("Autocomplete", () => (
  <Formik
    initialValues={{
      country: undefined,
      countryWithInitial: 1,
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit} autoComplete="off">
        <FormikAutocomplete
          name="country"
          label="No initial value"
          options={films}
          textProp={(option: any) => option.value}
          keyProp={(option: any) => option.key}
        />

        <FormikAutocomplete
          name="countryWithInitial"
          label="Initial Value 1"
          options={films}
          textProp={(option: any) => option.value}
          keyProp={(option: any) => option.key}
        />

        <FormikAutocomplete
          variant="async"
          name="asyncCountry"
          label="Async Example"
          textProp={(option: any) => option.value}
          keyProp={(option: any) => option.key}
          onLoadOptions={async (q) => {
            await setTimeout(() => {}, 1500);
            return films.filter((f) => f.value.includes(q));
          }}
          keyToOption={async (key) => {
            // await setTimeout(() => {}, 1500);
            const result = films.find((f) => f.key === key);
            console.log(result, key);
            return result;
          }}
        />

        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <Button onClick={() => formikProps.setFieldError("country", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

const server: FileMetadata[] = [];

// storiesOf("Formik", module).add("FilePicker", () => (
//   <Formik
//     initialValues={{
//       files: ""
//     }}
//     onSubmit={(values, actions) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//       });
//     }}
//     render={(formikProps: FormikProps<any>) => (
//       <form onSubmit={formikProps.handleSubmit} autoComplete="off">
//         <DummyFilePicker />
//         <Button type="submit">Save</Button>
//         <Button onClick={formikProps.handleReset}>Reset</Button>
//         <Button onClick={() => formikProps.setFieldError("files", "Error")}>
//           Set Error
//         </Button>
//       </form>
//     )}
//   />
// ));

storiesOf("Formik", module).add("Slider", () => (
  <Formik
    initialValues={{
      slider: "",
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit} autoComplete="off">
        <div style={{ padding: "20px" }}>
          <FormikSlider
            name="slider"
            defaultValue={80 as any}
            getAriaValueText={() => "Test C"}
            aria-labelledby="discrete-slider-always"
            step={10}
            marks={[
              {
                value: 0,
                label: "0°C",
              },
              {
                value: 20,
                label: "20°C",
              },
              {
                value: 37,
                label: "37°C",
              },
              {
                value: 100,
                label: "100°C",
              },
            ]}
            valueLabelDisplay="on"
          />
        </div>
        <br />
        <br />
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
        <Button onClick={() => formikProps.setFieldError("slider", "Error")}>
          Set Error
        </Button>
      </form>
    )}
  </Formik>
));

storiesOf("Formik", module).add("Custom Components", () => (
  <Formik
    initialValues={{
      custom: "",
      custom2: "",
    }}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }}
  >
    {(formikProps: FormikProps<any>) => (
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
        <Button onClick={() => formikProps.setFieldError("custom", "Error")}>
          Set Error
        </Button>
        <br />
        For more Information:
        <br />
        <a href="https://jaredpalmer.com/formik/docs/api/fastfield">Formik</a>
      </form>
    )}
  </Formik>
));

// Generate Dummy Inital Values

const initialValues = {} as any;

for (let i = 1; i <= 500; i++) {
  initialValues["textField" + i.toString()] = "";
}

storiesOf("Formik", module).add("Playground", () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Formik
      initialValues={{
        firstName: "",
        date: "",
        switch: "",
        select: "",
        radioGroup: "female",
        checkbox: "",
        country: "",
        files: "",
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        });
      }}
    >
      {(formikProps: FormikProps<any>) => (
        <form onSubmit={formikProps.handleSubmit}>
          <FormikTextField label="First Name" name="firstName" />
          <FormikDatepicker name="date" label="Date" />
          <FormikDateTimepicker name="date" label="Date" />
          <FormikSwitch label="Switch" name="switch" />
          <FormikSelect
            label="Select"
            name="select"
            options={[
              { key: 1, value: "Entry 1" },
              { key: 2, value: "Entry 2" },
              { key: 3, value: "Entry 3" },
            ]}
          />
          <FormikSearchableSelect
            label="Select"
            name="select"
            options={[
              { key: 1, value: "Entry 1" },
              { key: 2, value: "Entry 2" },
              { key: 3, value: "Entry 3" },
            ]}
          />
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
          <FormikCheckbox label="Checkbox" name="checkbox" />
          <FormikAutocomplete
            name="country"
            label="No initial value"
            options={[
              { key: 1, value: "Entry 1" },
              { key: 2, value: "Entry 2" },
              { key: 3, value: "Entry 3" },
            ]}
            textProp={(option: any) => option.value}
            keyProp={(option: any) => option.key}
          />
          {/* <DummyFilePicker /> */}
          <hr />
          <Button type="submit">Save</Button>
          <Button onClick={formikProps.handleReset}>Reset</Button>
          <Button
            onClick={() => {
              formikProps.setFieldError("date", "Error");
              formikProps.setFieldError("select", "Error");
              formikProps.setFieldError("firstName", "Error");
              formikProps.setFieldError("switch", "Error");
              formikProps.setFieldError("radioGroup", "Error");
              formikProps.setFieldError("checkbox", "Error");
              formikProps.setFieldError("country", "Error");
              formikProps.setFieldError("files", "Error");
            }}
          >
            Set Error
          </Button>
        </form>
      )}
    </Formik>
  </MuiPickersUtilsProvider>
));

storiesOf("Formik", module).add("Huge Form", () => (
  <React.Fragment>
    {initialValues && (
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          });
        }}
      >
        {(formikProps: FormikProps<any>) => (
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
      </Formik>
    )}
  </React.Fragment>
));

storiesOf("Formik", module).add("Error Tests", () => (
  <Formik
    initialValues={{
      actions: [{ actionID: "test" }],
      modID: undefined,
    }}
    validateOnBlur={false}
    onSubmit={(values, { setFieldError }) => {
      setFieldError("actions.0.actionID", "Error1");
    }}
  >
    {(formikProps: FormikProps<any>) => (
      <form onSubmit={formikProps.handleSubmit}>
        Default:
        <br />
        <FormikTextField label="ActionID" name="actions.0.actionID" />
        <FormikTextField label="ModID" name="modId" />
        <br />
        <br />
        <Button type="submit" disabled={formikProps.isSubmitting}>
          Save
        </Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  </Formik>
));
