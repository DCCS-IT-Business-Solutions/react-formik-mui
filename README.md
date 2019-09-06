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

For example:
A <FormikTextField> renders a <FastField> with a Material-UI <TextField>

FormikTextfield accepts every prop a Material-UI Textfield would accept and passes it down directly to the Textfield.

Since this project is still very young, be aware that this could change in the future.
If you want to see how it works for the others components, feel free to look at the source code

```javascript
//TextField Sourcecode-Sample

<FastField
  name={name}
  render={({ field, form }: FastFieldProps<any>) => (
    <TextField
      {...defaultProps}
      {...field}
      // Material UI:
      // => || ""  is needed for the label to work properly when Formik "handleReset" is used
      value={field.value || ""}
      error={(form.errors && form.errors[name] != null) || error}
      helperText={(form.errors && form.errors[name]) || helperText}
      {...others}
    />
  )}
  {...fastFieldProps}
/>
```

Checkbox is already a bit different.
If you want to pass props to die Material UI Checkbox you have to write do it like this:

```javascript
<FormikCheckbox
  label="Checkbox"
  name="checkbox"
  checkBoxProps={{ disabled: true }}
></FormikCheckbox>
```

And here is why:

```javascript
//Checkbox Sourcecode-Sample

<FastField
  name={name}
  render={({ field, form }: FastFieldProps<any>) => (
    <React.Fragment>
      <FormControlLabel
        control={<Checkbox {...field} {...checkBoxProps} />}
        label={label}
        {...formControlLabelProps}
      />
      <FormHelperText
        error={(form.errors && form.errors[name] != null) || error}
      >
        {(form.errors && form.errors[name]) || helperText}
      </FormHelperText>
    </React.Fragment>
  )}
  {...fastFieldProps}
/>
```

Things you can do:
Please note, that your fields must be in side of the <Formik> component.
For simplicity reasons, the following examples only show the fields itself.
Further down you can see everything combined. :)

```javascript

//Standard Textfield
<FormikTextField label="First Name" name="firstName"></FormikTextField>

//Number Textfield
<FormikTextField
  label="Salary"
  name="salary"
  type="number"
></FormikTextField>

//Multiline Textfield
<FormikTextField
  label="Multiline"
  name="multiline"
  multiline
></FormikTextField>

//With Helpertext
<FormikTextField
  label="Helpertext"
  name="helpertext"
  helperText="Info"
></FormikTextField>

//Error
<FormikTextField
          label="Error"
          name="error"
          error={true}
          helperText="Error"
        ></FormikTextField>

        //Different Variant s
        <FormikTextField
          label="Variant Outline"
          name="outline"
          variant="outlined"
        ></FormikTextField>

        <FormikTextField
          label="Variant filled"
          name="filled"
          variant="filled"
        ></FormikTextField>

        //Password
        <FormikTextField
          label="Password"
          name="password"
          type="password"
        ></FormikTextField>

        //InputAdornments
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
```

You can also pass props to the FastField via the optional prop fastFieldProps if needed

```javascript
<FormikTextField
  label="First Name"
  name="firstName"
  fastFieldProps={{ style: { marginBottom: "5px" } }}
></FormikTextField>
```

Here is are some examples with Formik:

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
