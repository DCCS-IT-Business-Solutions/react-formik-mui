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
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
));

const exampleJson = {
  id: 42,
  name: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Voluptatem earum modi sed vitae.",
      isValid: true
    },
    value: "Value1"
  },
  name2: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Esse ratione accusamus maxime reprehenderit ut modi.",
      isValid: true
    },
    value: false
  },
  uiSelectedCondition: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: true,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Quaerat sit fugiat iure veniam.",
      isValid: true
    },
    value: "Value1"
  },
  displayOrder: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Quo sit consectetur quo qui vel.",
      isValid: true
    },
    value: 1
  },
  printCondition: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: true,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Et cum delectus deleniti repellat blanditiis sint.",
      isValid: true
    },
    value: "Value1"
  },
  uiVisible: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: true,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "At nihil ipsa maiores.",
      isValid: true
    },
    value: false
  },
  isChapter: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: true,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Aut dolor quis amet sed ab nam.",
      isValid: true
    },
    value: false
  },
  versionUtc: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: true,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText: "Aliquid quidem harum dolor sint tempore amet.",
      isValid: true
    },
    value: "2019-09-04T00:00:00"
  },
  export: {
    configuration: {
      notifyOnValueChanged: true,
      symbol: "%",
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: true,
      hintText:
        "Voluptate ipsa architecto et consequuntur atque sapiente quidem.",
      isValid: true
    },
    value: false
  },
  documentType: {
    values: [
      {
        id: 1,
        name: "Name1"
      },
      {
        id: 2,
        name: "Name2"
      },
      {
        id: 3,
        name: "Name3"
      },
      {
        id: 4,
        name: "Name4"
      },
      {
        id: 5,
        name: "Name5"
      },
      {
        id: 6,
        name: "Name6"
      }
    ],
    configuration: {
      notifyOnValueChanged: true,
      symbol: null,
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: false,
      hintText: null,
      isValid: true
    },
    value: null
  },
  superDocument: {
    values: [
      {
        id: 1,
        name: "Name1"
      },
      {
        id: 2,
        name: "Name2"
      },
      {
        id: 3,
        name: "Name3"
      },
      {
        id: 4,
        name: "Name4"
      },
      {
        id: 5,
        name: "Name5"
      },
      {
        id: 6,
        name: "Name6"
      },
      {
        id: 7,
        name: "Name7"
      },
      {
        id: 8,
        name: "Name8"
      },
      {
        id: 9,
        name: "Name9"
      },
      {
        id: 10,
        name: "Name10"
      },
      {
        id: 11,
        name: "Name11"
      },
      {
        id: 12,
        name: "Name12"
      },
      {
        id: 13,
        name: "Name13"
      },
      {
        id: 14,
        name: "Name14"
      },
      {
        id: 15,
        name: "Name15"
      },
      {
        id: 16,
        name: "Name16"
      },
      {
        id: 17,
        name: "Name17"
      },
      {
        id: 18,
        name: "Name18"
      },
      {
        id: 19,
        name: "Name19"
      }
    ],
    configuration: {
      notifyOnValueChanged: true,
      symbol: null,
      prependSymbol: false,
      readOnly: false,
      label: "Document.field",
      clientId: "Document.field",
      visible: true,
      showHintText: false,
      hintText: null,
      isValid: true
    },
    value: null
  }
} as any;

let model = {
  configuration: {
    notifyOnValueChanged: true,
    symbol: <AccountCircle></AccountCircle>,
    prependSymbol: true,
    readOnly: false,
    label: "Document.field",
    clientId: "Document.field",
    visible: true,
    showHintText: true,
    hintText: "Voluptatem earum modi sed vitae.",
    isValid: false
  },
  value: "Value1"
};

const model2 = {
  configuration: {
    notifyOnValueChanged: true,
    symbol: "%",
    prependSymbol: true,
    readOnly: false,
    label: "Document.field",
    clientId: "Document.field",
    visible: true,
    showHintText: true,
    hintText: "Voluptatem earum modi sed vitae.",
    isValid: true
  },
  value: "TextOnly"
};

// storiesOf("Formik", module).add("MBFS TextFields", () => (
//   <Formik
//     initialValues={{
//       name: model.value
//     }}
//     onSubmit={(values, actions) => {
//       setTimeout(() => {
//         const keys = Object.keys(values);

//         keys.forEach((key, idx) => {
//           exampleJson[key].value = values[key];
//         });

//         alert(JSON.stringify(exampleJson, null, 2));
//       });
//     }}
//     render={(formikProps: FormikProps<any>) => (
//       <form
//         onSubmit={formikProps.handleSubmit}
//         onReset={formikProps.handleReset}
//       >
//         Default:
//         <br></br>
//         <MBFSTextField
//           name="name"
//           config={model.configuration}
//           onChange={(e: any) => {
//             console.log("davor");
//             formikProps.handleChange(e);
//             console.log("danach");
//           }}
//         ></MBFSTextField>
//         <MBFSTextField
//           name="name2"
//           textOnly={true}
//           config={model2.configuration}
//         ></MBFSTextField>
//         <br></br>
//         <Button type="submit">Save</Button>
//         <Button onClick={formikProps.handleReset}>Reset</Button>
//       </form>
//     )}
//   />
// ));

storiesOf("Formik", module).add("Datepicker", () => (
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
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
        Default:
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormikDatepicker name="date" label="Date"></FormikDatepicker>
        </MuiPickersUtilsProvider>
        <br></br>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
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
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
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
      <form
        onSubmit={formikProps.handleSubmit}
        onReset={formikProps.handleReset}
      >
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
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
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
