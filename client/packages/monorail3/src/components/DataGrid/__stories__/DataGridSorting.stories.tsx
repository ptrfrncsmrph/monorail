// Edit this file to add new stories
import React from 'react'
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridColumns,
  GridRowData,
  GridRowsProp,
  GridSortDirection,
  GridSortModel,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import {
  GridData,
  randomCreatedDate,
  randomUpdatedDate,
  useDemoData,
} from '@mui/x-data-grid-generator'

import { story } from '../../../__tests__/helpers/storybook'

export default { title: 'Data Grid/Sorting', component: DataGrid }

const Template = story<DataGridProps>((args: Partial<DataGridProps>) => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'commodity',
      sort: 'asc',
    },
  ])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        sortModel={sortModel}
        onSortModelChange={model => setSortModel(model)}
      />
    </div>
  )
})

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `Single column sorting can be triggered with by clicking a column header. Repeat this action to change the sorting direction.

A sorted column can be can pre-configured using the  \`sortModel\`  prop of the  \`GridColDef\`  interface:`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

const columns: GridColumns = [
  { field: 'name' },
  { field: 'age', type: 'number' },
  {
    field: 'username',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'name') ?? 'unknown'} - ${
        params.getValue(params.id, 'age') ?? 'x'
      }`,
    sortComparator: (v1, v2, param1, param2) =>
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      (param1.api.getCellValue(param1.id, 'age') as number) -
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      (param2.api.getCellValue(param2.id, 'age') as number),
    width: 150,
  },
  { field: 'dateCreated', type: 'date', width: 180 },
  { field: 'lastLogin', type: 'dateTime', width: 180 },
]

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: 'Sebastien',
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: 'Louise',
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 6,
    name: 'George',
    age: 10,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
]

export const ComparatorSortingGrid = story<DataGridProps>(args => {
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'username',
      sort: 'asc' as GridSortDirection,
    },
  ])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={model => setSortModel(model)}
        {...args}
      />
    </div>
  )
})

ComparatorSortingGrid.storyName = 'Custom comparator'
ComparatorSortingGrid.parameters = {
  docs: {
    description: {
      story: `The grid handles sorting and applies different comparators in columns according to their types. The component handles sorting natively for the following types:

-   string
-   number
-   date
-   dateTime

To extend or modify this behavior in a specific column, you can pass in a custom comparator, and override the  \`sortComparator\`  prop of the  \`GridColDef\`  interface.

In the example below, the  \`username\`  column combines  \`name\`  and  \`age\`, but it is sorted by  \`age\`  using a custom comparator:`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const OrderSortingGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })

  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: 'commodity',
      sort: 'asc' as GridSortDirection,
    },
  ])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortingOrder={['desc', 'asc']}
        sortModel={sortModel}
        onSortModelChange={model => setSortModel(model)}
        {...data}
        {...args}
      />
    </div>
  )
})

OrderSortingGrid.storyName = 'Sort order'
OrderSortingGrid.parameters = {
  docs: {
    description: {
      story: `By default, the sort order cycles between these three different modes:


    const sortingOrder = ['asc', 'desc', null];


In practice, when you click a column that is not sorted, it will sort ascending (\`asc\`). The next click will make it sort descending (\`desc\`). Another click will remove the sort (\`null\`), reverting to the order that the data was provided in. This behavior can be overwritten by setting the  \`sortingOrder\`  prop.

In the example below columns are only sortable in descending or ascending order.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const DisableSortingGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        columns={data.columns.map(
          column =>
            ({
              ...column,
              sortable: false,
            } as GridColDef),
        )}
      />
    </div>
  )
})

DisableSortingGrid.storyName = 'Disable ordering'
DisableSortingGrid.parameters = {
  docs: {
    description: {
      story: `By default, all columns are sortable. This can be revoked using the sortable prop of the \`GridColDef\` interface:
      
    const columns: GridColDef = [{ field: 'name', sortable: false }];
      
      `,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

// #region Server-side sorting
function loadServerRows(
  sortModel: GridSortModel,
  data: GridData,
): Promise<Array<GridRowData>> {
  return new Promise<Array<GridRowData>>(resolve => {
    setTimeout(() => {
      if (sortModel.length === 0) {
        resolve(data.rows)
        return
      }

      const sortedColumn = sortModel[0]

      let sortedRows = [...data.rows].sort((a, b) =>
        String(a[sortedColumn.field]).localeCompare(
          String(b[sortedColumn.field]),
        ),
      )

      if (sortModel[0].sort === 'desc') {
        sortedRows = sortedRows.reverse()
      }

      resolve(sortedRows)
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export const ServerSortingGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    { field: 'commodity', sort: 'asc' },
  ])
  const [rows, setRows] = React.useState<GridRowsProp>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleSortModelChange = (newModel: GridSortModel) => {
    setSortModel(newModel)
  }

  React.useEffect(() => {
    let active = true

    ;(async () => {
      setLoading(true)
      const newRows = await loadServerRows(sortModel, data)

      if (!active) {
        return
      }

      setRows(newRows)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [sortModel, data])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        loading={loading}
        {...args}
      />
    </div>
  )
})
ServerSortingGrid.storyName = 'Server-side sorting'
ServerSortingGrid.parameters = {
  docs: {
    description: {
      story: `By default, sorting works client-side. To switch it to server-side, set \`sortingMode="server"\`. Then you need to handle the \`onSortModelChange\` callback, sort the rows on the server-side, and update the \`rows\` prop with the newly sorted rows.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
// #endregion

export const MultiSortingGrid = story<DataGridProps>(() => {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // })

  // const [sortModel, setSortModel] = React.useState<GridSortModel>([
  //   {
  //     field: 'commodity',
  //     sort: 'asc' as GridSortDirection,
  //   },
  //   {
  //     field: 'desk',
  //     sort: 'desc' as GridSortDirection,
  //   },
  // ])

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro
    //     {...data}
    //     sortModel={sortModel}
    //     onSortModelChange={(model) => setSortModel(model)}
    //   />
    // </div>
  )
})
MultiSortingGrid.storyName = 'Multi-column sorting'
MultiSortingGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
You can sort by multiple columns at the same time using \`DataGridPro\`. Hold down the CTRL or Shift (use ⌘ Command on macOS) key while clicking the column header.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const DataGridSortingApiRef = story<DataGridProps>(() => <></>)
DataGridSortingApiRef.storyName = 'apiRef'
DataGridSortingApiRef.parameters = {
  docs: {
    description: {
      story: `The grid exposes a set of methods that enables all of these features using the imperative apiRef.

> ⚠️ Only use this API when you have no alternative. Always start from the declarative API that the grid exposes.

-   \`getSortModel\`: Get the sort model currently applied to the grid.
-   \`setSortModel\`: Set the sort model and trigger the sorting of rows.
-   \`onSortModelChange\`: Callback fired when the column sorting changed before the grid has sorted its rows.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
