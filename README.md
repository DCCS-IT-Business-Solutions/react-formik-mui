# react-datagrid-plain &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/react-datagrid-plain.svg) ![npm version](https://img.shields.io/npm/v/@dccs/react-datagrid-plain.svg)

A light datagrid build upon react-table-mui for React.

## Installation

You should install [react-datagrid-plain with npm or yarn](https://www.npmjs.com/package/@dccs/react-datagrid-plain):

    npm install @dccs/react-datagrid-plain
    or
    yarn add @dccs/react-datagrid-plain

This command will download and install react-datagrid-plain

## How it works

react-datagrid-plain uses:

- [@dccs/react-table-plain](https://www.npmjs.com/package/@dccs/react-table-plain) to display the table data

react-datagrid-plain is designed to do all the paging and sorting for you. You only provide the `onLoadData` callback, that returns the data as a `Promise<{data: any[], total: number}>` (paging needs `total` to provide the maximal number pages).

Here is an example:

```javascript
<DataGridPlain
  colDef={[
    { prop: "id", header: "Id" },
    { prop: "display_name", header: "Full name", sortable: true }
  ]}
  onLoadData={(page, rowsPerPage, orderBy, desc) =>
    fetch(url /* with querystring params */)
      .then(resp => resp.json())
      .then(resp => ({ data: resp.data, total: resp.total }))
  }
/>
```

Inside the `onLoadData` you can use whatever Http library you want. That way it is possible to append i.e. authorization tokens, custom http headers, ...

`onLoadData` can provide data from every source. Server, client, rest, GraphQL, ... react-datagrid-mui does not care.
