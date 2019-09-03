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

Here is an example:

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
      <FormikTextField label="Vorname" name="firstName"></FormikTextField>
      <br></br>
      <Button type="submit">Save</Button>
      <Button onClick={formikProps.resetForm}>Reset</Button>
    </form>
  )}
/>
```
