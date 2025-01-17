// Edit this file to add new stories
import React from 'react'
import { Clear, Search } from '@mui/icons-material'
import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import { useDemoData } from '@mui/x-data-grid-generator'

import type {
  DataGridProps,
  GridCellParams,
  GridColDef,
  GridColTypeDef,
  GridFilterInputValueProps,
  GridFilterItem,
  GridFilterModel,
  GridFilterOperator,
  GridRowModel,
  GridValidRowModel,
} from '@monorail/components'
import {
  DataGrid,
  getGridNumericOperators,
  GridToolbar,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  IconButton,
  InputAdornment,
  Rating,
  TextField,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Grid/Filtering', component: DataGrid }

const Template = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            {
              field: 'commodity',
              operator: 'contains',
              value: 'rice',
            },
          ],
        }}
      />
    </div>
  )
})

export const Default = story(Template)
Default.parameters = {
  docs: {
    description: {
      component: `###Basic filter

Column filters can be set using the column menu and clicking the Filter menu item. Alternatively, if the grid has the toolbar displayed, you just need to click on the Filters button.

The filter applied to a column can be pre-configured using the  \`filterModel\`  prop:

	<DataGrid
	  filterModel={{
	    items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
	  }}
	/>
`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Predefined filters
 */
const columns = [
  { field: 'name', headerName: 'Name', width: 180 },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 140,
  },
  {
    field: 'dateCreated',
    headerName: 'Created on',
    width: 180,
    type: 'date',
  },
  {
    field: 'isAdmin',
    headerName: 'Is admin?',
    width: 180,
    type: 'boolean',
  },
]

export const FilterOperators = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 10,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...args} rows={data.rows} columns={columns} />
    </div>
  )
})
FilterOperators.storyName = 'Predefined filters'
FilterOperators.parameters = {
  docs: {
    description: {
      story: `A filter is composed of three parts: the column to filter, the value to look for, and an operator (e.g.  _contains_,  _is before_,  _is after_, etc.). The operator determines if a candidate value should be considered as a result. The candidate value used by the operator is the one corresponding to the  \`field\`  attribute or the  \`valueGetter\`  of the  \`GridColDef\`. As part of the predefined column types, a set of operators is available. You can find the supported column types in the  [columns section](https://mui.com/components/data-grid/columns/#column-types).

**Note**: The  [\`valueFormatter\`](https://mui.com/components/data-grid/columns/#value-formatter)  is only used for rendering purposes.

The following demo allows to explore the different operators available:`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Disable filtering
 */
export const DisableFilteringGrid = story<DataGridProps>(args => {
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
              filterable: false,
            } as GridColDef),
        )}
      />
    </div>
  )
})
DisableFilteringGrid.storyName = 'Disable filtering'
DisableFilteringGrid.parameters = {
  docs: {
    description: {
      story: `**Globally**

Filters are enabled by default, but you can easily disable this feature by setting the  \`disableColumnFilter\`  prop.

    <DataGrid disableColumnFilter />

**Per column**

You can disable the filter on a column by setting the  \`filterable\`  property of the  \`GridColDef\`  to  \`false\`;

    const columns = [{ field: 'image', filterable: false }];
`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Customize the filters
 */
// #region Change the input component
const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 20,
  },
})

function RatingInputValue(props: GridFilterInputValueProps) {
  const classes = useStyles()
  const { item, applyValue } = props

  const handleFilterChange = (event: React.SyntheticEvent<Element, Event>) => {
    applyValue({ ...item, value: (event.target as HTMLInputElement).value })
  }

  return (
    <div className={classes.root}>
      <Rating
        name="custom-rating-filter-operator"
        placeholder="Filter value"
        value={Number(item.value)}
        onChange={handleFilterChange}
        precision={0.5}
      />
    </div>
  )
}

export const ExtendNumericOperator = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
  })
  const columns = [...(data.columns as Array<GridColDef>)]

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [{ field: 'rating', value: '3.5', operator: '>=' }],
  })

  if (columns.length > 0) {
    const ratingColumn = columns.find(column => column.field === 'rating')!
    const ratingColIndex = columns.findIndex(col => col.field === 'rating')

    const ratingFilterOperators = getGridNumericOperators().map(
      (operator: GridFilterOperator) => ({
        ...operator,
        InputComponent: RatingInputValue,
      }),
    )
    columns[ratingColIndex] = {
      ...ratingColumn,
      filterOperators: ratingFilterOperators,
    }
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        rows={data.rows}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={model => setFilterModel(model)}
      />
    </div>
  )
})
ExtendNumericOperator.storyName = 'Customize the filters'
ExtendNumericOperator.parameters = {
  docs: {
    description: {
      story: `The grid provides different ways to customize the filter panel. This section provides examples on how to make the most common modifications.

### Change the input component

The value used by the operator to look for has to be entered by the user. On most column types, a text field is used. However, a custom component can be rendered instead.

In this demo, the Rating column reuses the numeric filter and the same rating component is used to the enter the value of the filter.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
// #endregion

/**
 * Extend filter operators
 */
const priceColumnType: GridColTypeDef = {
  extendType: 'number',
  filterOperators: getGridNumericOperators()
    .filter(operator => operator.value === '>' || operator.value === '<')
    .map(operator => {
      return {
        ...operator,
        InputComponentProps: {
          InputProps: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        },
      }
    }),
}

export const ColumnTypeFilteringGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({ dataSet: 'Commodity', rowLength: 100 })
  const columns = React.useMemo(() => {
    if (data.columns.length > 0) {
      // const visibleFields = ['desk', 'commodity', 'totalPrice']
      const mappedColumns = data.columns.map(dataColumn => {
        let mappedColumn: GridColDef = {
          ...dataColumn,
          // hide: visibleFields.indexOf((dataColumn as GridColDef).field) === -1,
        } as GridColDef
        if (mappedColumn.field === 'totalPrice') {
          mappedColumn = {
            ...mappedColumn,
            ...priceColumnType,
            width: 180,
          }
        }
        return mappedColumn
      })
      return mappedColumns
    }
    return []
  }, [data.columns])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        rows={data.rows}
        columns={columns}
        filterModel={{
          items: [{ field: 'totalPrice', value: '3000000', operator: '>' }],
        }}
      />
    </div>
  )
})

ColumnTypeFilteringGrid.storyName = 'Extend filter operators'
ColumnTypeFilteringGrid.parameters = {
  docs: {
    description: {
      story: `When defining a  [custom column type](https://mui.com/components/data-grid/columns/#custom-column-types), the added operators are the same from the type that was extended.

In this demo, a  \`price\`  column type (used by Total is USD) is defined extending the  \`number\`  column type. Instead of adding all numeric operators, only the operators  \`<\`  and  \`>\`  are kept. Furthermore, the "$" prefix is added to the input component with the  \`InputComponentProps\`  prop.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Create a custom operator
 */
const ratingOnlyOperators = [
  {
    label: 'From',
    value: 'from',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
      if (
        filterItem.field === undefined ||
        filterItem.value === undefined ||
        filterItem.operator === undefined
      ) {
        return null
      }

      return (params: GridCellParams): boolean => {
        return Number(params.value) >= Number(filterItem.value)
      }
    },
    InputComponent: RatingInputValue,
    InputComponentProps: { type: 'number' },
  },
]

export const CustomRatingOperator = story<DataGridProps>(args => {
  const { data } = useDemoData({ dataSet: 'Employee', rowLength: 100 })
  const columns = [...(data.columns as Array<GridColDef>)]
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [{ field: 'rating', value: '3.5', operator: 'from' }],
  })

  if (columns.length > 0) {
    const ratingColumn: GridColDef = columns.find(
      col => col.field === 'rating',
    ) as GridColDef
    const newRatingColumn = {
      ...ratingColumn!,
      filterOperators: ratingOnlyOperators,
    }
    const ratingColIndex = columns.findIndex(col => col.field === 'rating')
    columns[ratingColIndex] = newRatingColumn
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        rows={data.rows}
        columns={columns}
        filterModel={filterModel}
        onFilterModelChange={model => setFilterModel(model)}
      />
    </div>
  )
})

CustomRatingOperator.storyName = 'Create a custom operator'
CustomRatingOperator.parameters = {
  docs: {
    description: {
      story: `If reusing the native filter operators is not enough, creating a custom operator is an option. A custom operator is defined creating a  \`GridFilterOperator\`  object. This object has to be added to the  \`filterOperators\`  attribute of the  \`GridColDef\`.

The most important part of an operator is the  \`getApplyFilterFn\`  function. It's called with the  \`GridFilterItem\`  object and the  \`GridColDef\`  object. This function must return another function that is called on every value of the column. The returned function determines if the cell value satisfies the condition of the operator.

    {
      label: 'From',
      value: 'from',
      getApplyFilterFn: (filterItem: GridFilterItem, column: GridColDef) => {
        if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
          return null;
        }
        return (params: GridCellParams): boolean => {
          return Number(params.value) >= Number(filterItem.value);
        };
      },
      InputComponent: RatingInputValue,
      InputComponentProps: { type: 'number' },
    }

**Note**: If the column has a  [\`valueGetter\`](https://mui.com/components/data-grid/columns/#value-getter), then  \`params.value\`  will be the resolved value.

In this demo, you can see how to create a completely new operator for the Rating column.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Server-side filtering
 */
function loadServerRows(
  commodityFilterValue?: string,
): Promise<Array<GridValidRowModel>> {
  const serverRows = [
    { id: '1', commodity: 'rice' },
    { id: '2', commodity: 'soybeans' },
    { id: '3', commodity: 'milk' },
    { id: '4', commodity: 'wheat' },
    { id: '5', commodity: 'oats' },
  ]

  return new Promise<Array<GridValidRowModel>>(resolve => {
    setTimeout(() => {
      if (commodityFilterValue === undefined) {
        resolve(serverRows)
        return
      }
      resolve(
        serverRows.filter(
          row =>
            row.commodity.toLowerCase().indexOf(commodityFilterValue!) > -1,
        ),
      )
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export const ServerFilterGrid = story<DataGridProps>(args => {
  const [columns] = React.useState<Array<GridColDef>>([
    { field: 'commodity', width: 150 },
  ])
  const [rows, setRows] = React.useState<Array<GridRowModel>>([])
  const [filterValue, setFilterValue] = React.useState<string | undefined>()
  const [loading, setLoading] = React.useState(false)

  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    setFilterValue(filterModel.items[0].value)
  }, [])

  React.useEffect(() => {
    let active = true

    ;(async () => {
      setLoading(true)
      const newRows = await loadServerRows(filterValue)

      if (!active) {
        return
      }

      setRows(newRows)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [filterValue])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        rows={rows}
        columns={columns}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        loading={loading}
      />
    </div>
  )
})
ServerFilterGrid.storyName = 'Server-side filtering'
ServerFilterGrid.parameters = {
  docs: {
    description: {
      story: `Filtering can be run server-side by setting the  \`filterMode\`  prop to  \`server\`, and implementing the  \`onFilterModelChange\`  handler.

    <DataGrid
      rows={rows}
      columns={columns}
      filterMode="server"
      onFilterModelChange={handleFilterModelChange}
      loading={loading}
    />

Below is a very simple demo on how you could achieve server-side filtering.`,
    },
  },

  creevey: {
    skip: "Story doesn't load reliably",
  },
}

/**
 * Multi-column filtering
 */
export const MultiFilteringGrid = story<DataGridProps>(() => {
  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 200,
  //   maxColumns: 6,
  // })
  // const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
  //   items: [
  //     {
  //       id: 1,
  //       columnField: 'commodity',
  //       operatorValue: 'contains',
  //       value: 'rice',
  //     },
  //     { id: 2, columnField: 'quantity', operatorValue: '>=', value: '20000' },
  //   ],
  // })
  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro
    //     {...data}
    //     filterModel={filterModel}
    //     onFilterModelChange={(model) => setFilterModel(model)}
    //   />
    // </div>
  )
})

MultiFilteringGrid.storyName = 'Multi-column filtering (and/or)'
MultiFilteringGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
DataGridPro supports filtering by multiple columns. The default operator that will be applied between filters is an And.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

// TODO(storybook): Uncomment once we have DataGridPro (paid)
// const filterModel: GridFilterModel = {
//   items: [
//     {
//       id: 1,
//       columnField: 'commodity',
//       operatorValue: 'contains',
//       value: 'rice',
//     },
//     {
//       id: 2,
//       columnField: 'commodity',
//       operatorValue: 'startsWith',
//       value: 'soy',
//     },
//   ],
//   linkOperator: GridLinkOperator.Or,
// }

export const MultiFilteringWithOrGrid = story<DataGridProps>(() => {
  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // })

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro {...data} filterModel={filterModel} />
    // </div>
  )
})

MultiFilteringWithOrGrid.storyName =
  'Multi-column filtering: changing the operator'
MultiFilteringWithOrGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
To change the default operator, you should set the 'linkOperator' property of the filterModel like below.

    const filterModel: GridFilterModel = {
      items: [
        { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
        { columnField: 'commodity', operatorValue: 'startsWith', value: 'Soy' },
      ],
      linkOperator: GridLinkOperator.Or,
    };
`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

/**
 * Quick filter
 */
function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const defaultTheme = createTheme()
const useStylesQuickFilter = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(0.5, 0.5, 0),
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      textField: {
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
        margin: theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
          marginRight: theme.spacing(0.5),
        },
        '& .MuiInput-underline:before': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    }),
  { defaultTheme },
)

interface QuickSearchToolbarProps {
  clearSearch: () => void
  onChange: () => void
  value: string
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  const classes = useStylesQuickFilter()

  return (
    <div className={classes.root}>
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <Search fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <Clear fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  )
}

export const QuickFilteringGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })
  const [searchText, setSearchText] = React.useState('')
  const [rows, setRows] = React.useState<Array<GridValidRowModel>>(data.rows)

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.rows.filter((row: GridValidRowModel) => {
      /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString())
        /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
      })
    })
    setRows(filteredRows)
  }

  React.useEffect(() => {
    setRows(data.rows)
  }, [data.rows])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={data.columns}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </div>
  )
})

QuickFilteringGrid.storyName = 'Quick filter'
QuickFilteringGrid.parameters = {
  docs: {
    description: {
      story: `The grid does not natively include quick filtering. However, it can be implemented as in the demo below.

> 🚧 This feature isn't natively implemented in the grid package. It's coming.
> 👍 Upvote  [issue #202](https://github.com/mui-org/material-ui-x/issues/202)  if you want to see it land faster.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const DataGridFilteringApiRef = story<DataGridProps>(() => <></>)
DataGridFilteringApiRef.storyName = 'apiRef'
DataGridFilteringApiRef.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\` [apiRef](https://mui.com/components/data-grid/filtering/#apiref)
      
-   \`applyFilter()\`: Applies a GridFilterItem on all rows. If no \`linkOperator\` is given, the "and" operator is used.
-   \`applyFilterLinkOperator()\`: Changes the GridLinkOperator used to connect the filters.
-   \`applyFilters()\`: Applies all filters on all rows.
-   \`deleteFilter()\`: Deletes a GridFilterItem.
-   \`getVisibleRowModels()\`: Returns a sorted \`Map\` containing only the visible rows.
-   \`hideFilterPanel()\`: Hides the filter panel.
-   \`setFilterModel()\`: Sets the filter model to the one give by \`model\`.
-   \`showFilterPanel()\`: Shows the filter panel. If \`targetColumnField\` is given, a filter for this field is also added.
-   \`upsertFilter()\`: Updates or inserts a GridFilterItem.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
