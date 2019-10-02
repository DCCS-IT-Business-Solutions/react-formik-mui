# react-formik-mui &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-formik-mui.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-formik-mui.svg)

Simple Formik <-> MaterialUI wrappers.

Here is a Demo:[https://dccs-it-business-solutions.github.io/react-formik-mui/](https://dccs-it-business-solutions.github.io/react-formik-mui/)

## Installation

You should install [react-formik-mui with npm or yarn](https://www.npmjs.com/package/@dccs/react-formik-mui):

    npm install @dccs/react-formik-mui

or

    yarn add @dccs/react-formik-mui

This command will download and install react-formik-mui

Dependencies required by FormikTextField,-Select,-Switch,-Checkbox,-Radio

    npm install formik
    npm install @material-ui/core

Dependencies required by FormikDatepicker
[You can also look at the documentation of the MUI-Datepicker](https://material-ui-pickers.dev/getting-started/installation)

    npm install @material-ui/pickers
    npm install @date-io/date-fns@latest
    npm install date-fns@latest

## Available Components

All MUI-Components are used inside of the renderfunction of a Formik-FastField.

- FormikTextField (Material UI TextField) - Renders a MUI-TextField
- FormikSelect (Material UI Select) - Renders a MUI-FormControl with a MUI-Select and a MUI-FormHelperText
- FormikCheckbox (Material UI Checkbox) - Renders a MUI-FormControlLabel with a MUI-Checkbox and a MUI-FormHelperText
- FormikRadio (Material UI Radiobutton) - Renders a MUI-FormControlLabel with a MUI-Radio and a MUI-FormHelperText
- FormikSwitch (Material UI Switch) - Renders a MUI-FormControlLabel with a MUI-Radio and a MUI-FormHelperText
- FormikDatepicker (Material UI Pickers KeyboardDatepicker) - Renders a MUI-KeyboardDatepicker
- FormikAutoComplete ([@DCCS Autocomplete](https://www.npmjs.com/package/@dccs/react-autocomplete-mui)) - Renders a Autocomplete-Component
- FomikFilePicker ([@DCCS FilePicker](https://github.com/DCCS-IT-Business-Solutions/react-filepicker-mui)) - Renders a FilePicker-Component

## How it works

[Codesandbox with all components](https://codesandbox.io/s/trusting-star-d5rup)

More Examples:

**_FormikTextField_**

FormikTextField-Props are almost identical to [Material-UI TextField Props](https://material-ui.com/de/api/text-field/)
The only difference is, that "name" is required.

```javascript
    <FormikTextField  label="First Name"  name="firstName" />

    <FormikTextField label="Salary" name="salary" type="number" />

    <FormikTextField label="Multiline" name="multiline" multiline />

    <FormikTextField label="Helpertext" name="helpertext" helperText="Info" />

    <FormikTextField label="Error" name="error" error={true} helperText="Error" />

    <FormikTextField label="Variant Outline" name="outline" variant="outlined" />

    <FormikTextField label="Variant filled" name="filled" variant="filled" />

    <FormikTextField label="Password" name="password" type="password" />

    <FormikTextField
    	label="Input Adornments"
    	name="adornments"
    	InputProps={{
    		startAdornment: (
    			<InputAdornment  position="start">
    			<AccountCircle></AccountCircle>
    			</InputAdornment>
    		)
    	}}
    />
```

**_FormikCheckbox_**

FormikCheckbox-Props are almost identical to [https://material-ui.com/api/checkbox/](https://material-ui.com/api/checkbox/)

It also accepts formControlLabelProps and formHelperTextProps.

```javascript
<FormikCheckbox label="Checkbox" name="checkbox"></FormikCheckbox>
```

Label Placement

```javascript
<FormikCheckbox
  label="Checkbox Bottom"
  name="checkboxBottom"
  formControlLabelProps={{ labelPlacement: "bottom" }}
/>
```

**_FormikSwitch_**

FormikSwitch-Props are almost identical to [https://material-ui.com/api/switch/](https://material-ui.com/api/switch/)

It also accepts formControlLabelProps and formHelperTextProps.
<FormikSwitch  label="Switch"  name="switch"></FormikSwitch>

Label Placement

```javascript
<FormikSwitch
  label="Switch Bottom"
  name="switchBottom"
  formControlLabelProps={{ labelPlacement: "bottom" }}
/>
```

**_FormikSelect_**
FormikSelect-Props are almost identical to [https://material-ui.com/api/select/](https://material-ui.com/api/select/)

It also accepts formControlProps and formHelperTextProps.

```javascript
<FormikSelect
  label="Select"
  name="select"
  options={[
    { key: 1, value: "Entry 1" },
    { key: 2, value: "Entry 2" },
    { key: 3, value: "Entry 3" }
  ]}
/>
```

Without Label

```javascript
<FormikSelect
  name="select2"
  options={[
    { key: 1, value: "Entry 1" },
    { key: 2, value: "Entry 2" },
    { key: 3, value: "Entry 3" }
  ]}
/>
```

**_FormikRadio_**

FormikRadio-Props are almost identical to [https://material-ui.com/api/radio/](https://material-ui.com/api/radio/)

It also accepts formControlLabelProps and formHelperTextProps.

```javascript
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
```

**_FormikDatepicker_**

FormikDatepicker-Props are almost identical to [https://material-ui-pickers.dev/api/KeyboardDatePicker](https://material-ui-pickers.dev/api/KeyboardDatePicker)

```javascript
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <FormikDatepicker name="date" label="Date"></FormikDatepicker>
</MuiPickersUtilsProvider>
```

**_FormikFilePicker_**

FormikFilePicker-Props are almost identical to [https://github.com/DCCS-IT-Business-Solutions/react-filepicker-mui](https://github.com/DCCS-IT-Business-Solutions/react-filepicker-mui)

```javascript
<FormikFilePicker
  name="files"
  uploadFile={(file: File) => {
    // should return an id with wich the file can be found
  }}
  getFile={(fileId: string) => {
    // should return file metadata
    // needed properties are id and name
  }}
/>
```

**_Custom Components_**

For more information: https://jaredpalmer.com/formik/docs/api/fastfield

```javascript
    <FastField
    	name="custom"
    	render={(fastFieldProps: FastFieldProps<any>) => (
    		<React.Fragment>
    			{/* Merge FastField-Props into Input */}
    			<input  {...fastFieldProps.field}  />

    			{/* Show Errormessage after Touch */}
    			{formikProps.touched.custom ? formikProps.errors.custom : null
    		</React.Fragment>
    	)}
    />
```

With HandleChange

```javascript
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
    </React.Fragment>
  )}
/>
```

## Contributing

### License

@dccs/react-formik-mui is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
