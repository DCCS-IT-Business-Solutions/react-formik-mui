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
    <form onSubmit={formikProps.handleSubmit}>
      <FormikTextField label="First Name" name="firstName"></FormikTextField>

      <Button type="submit">Save</Button>

      <Button onClick={formikProps.handleReset}>Reset</Button>
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
    <form onSubmit={formikProps.handleSubmit}>
      Default:
      <FormikCheckbox label="Checkbox" name="checkbox"></FormikCheckbox>
      With Label Placement Bottom
      <FormikCheckbox
        label="Checkbox Bottom"
        name="checkboxBottom"
        formControlLabelProps={{ labelPlacement: "bottom" }}
      ></FormikCheckbox>
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.handleReset}>Reset</Button>
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
    <form onSubmit={formikProps.handleSubmit}>
      Default:
      <FormikSwitch label="Switch" name="switch"></FormikSwitch>
      Label Placement Bottom
      <FormikSwitch
        label="Switch Bottom"
        name="switchBottom"
        formControlLabelProps={{ labelPlacement: "bottom" }}
      ></FormikSwitch>
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.handleReset}>Reset</Button>
    </form>
  )}
/>
```

Selects:

```javascript
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
      <FormikSelect
        label="Select"
        name="select"
        options={[
          { key: 1, value: "Entry 1" },
          { key: 2, value: "Entry 2" },
          { key: 3, value: "Entry 3" }
        ]}
      ></FormikSelect>
      Without Label:
      <FormikSelect
        name="select2"
        options={[
          { key: 1, value: "Entry 1" },
          { key: 2, value: "Entry 2" },
          { key: 3, value: "Entry 3" }
        ]}
      ></FormikSelect>
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.handleReset}>Reset</Button>
    </form>
  )}
/>
```

Selects:

```javascript
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

      <Button type="submit">Save</Button>
      <Button onClick={formikProps.handleReset}>Reset</Button>
    </form>
  )}
/>
```

Datepicker:

The datepicker needs a bit more than "FormikDatepicker"

The Material UI Datepicker only works if there is a MuiPickersUtilsProvider atleast one level higher

We are using @date-io/date-fns date-fns@next for utils an localization.

For more information: [material-ui-pickers](https://material-ui-pickers.dev/getting-started/installation)

```javascript
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
        <FormikDatepicker name="date" label="Date"></FormikDatepicker>
        <Button type="submit">Save</Button>
        <Button onClick={formikProps.handleReset}>Reset</Button>
      </form>
    )}
  />
</MuiPickersUtilsProvider>
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
    <form onSubmit={formikProps.handleSubmit}>
      Custom Component:
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
      Custom Component with handleChange:
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
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.handleReset}>Reset</Button>
    </form>
  )}
/>
```

## Contributing

### License

@dccs/react-formik-mui is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
