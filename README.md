# react-formik-mui &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-formik-mui.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-formik-mui.svg)

Simple Formik <-> MaterialUI wrappers. [https://dccs-it-business-solutions.github.io/react-formik-mui/](https://dccs-it-business-solutions.github.io/react-formik-mui/)

## Installation

You should install [react-formik-mui with npm or yarn](https://www.npmjs.com/package/@dccs/react-formik-mui):

    npm install @dccs/react-formik-mui
    or
    yarn add @dccs/react-formik-mui

This command will download and install react-formik-mui

## How it works

react-formik-mui combines Formik with MaterialUI-Components

Here is a simple example:

```javascript
<Formik
  initialValues={{
    firstName: ""
  }}
  onSubmit={(values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    });
  }}
  render={(formikProps: FormikProps<any>) => (
    <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
      Default:
      <br></br>
      <FormikTextField label="First Name" name="firstName"></FormikTextField>
      <br></br>
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.resetForm}>Reset</Button>
    </form>
  )}
/>
```

Checkboxes:

```javascript
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
    <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
      Default:
      <br></br>
      <FormikCheckbox label="Checkbox" name="checkbox"></FormikCheckbox>
      <br></br>
      <br></br>
      With Label Placement Bottom
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
```

Switches:

```javascript
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
    <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
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
```

Custom Components

For more information: https://jaredpalmer.com/formik/docs/api/fastfield

```javascript
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
    <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
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
    </form>
  )}
/>
```
