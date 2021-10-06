// Edit this file to add new stories
import React from 'react'
import { DataGrid, DataGridProps } from '../DataGrid'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DataGrid.stories.gen'
import {
  GridActionsCellItem,
  GridApiRef,
  GridCellEditCommitParams,
  GridCellParams,
  GridCellValue,
  GridColDef,
  GridColumns,
  GridEditCellPropsParams,
  GridEditRowsModel,
  GridEvents,
  GridRenderCellParams,
  GridRowParams,
  GridRowsProp,
  GridToolbarContainer,
  GridValueGetterParams,
  MuiEvent,
  useGridApiRef,
} from '@mui/x-data-grid'
import {
  randomCreatedDate,
  randomEmail,
  randomId,
  randomPrice,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator'
import { makeStyles } from '@mui/styles'
import { createTheme, Theme } from '@mui/material/styles'
import { Alert } from '../../Alert/Alert'
import { Rating } from '../../Rating/Rating'
import { Button } from '../../Button/Button'
import { Add, Cancel, Delete, Edit, Save } from '@mui/icons-material'

export default { ...defaultStoryMeta, title: 'Data Grid/Editing' }

const columns: GridColumns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
]

const rows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
]

const Template = story<DataGridProps>(args => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} {...args} />
    </div>
  )
})

export const Default = story(Template)
Default.parameters = {
  docs: {
    description: {
      component: `The data grid has built-in edit capabilities that you can customize to your needs.

## Cell editing

Cell editing allows editing the value of one cell at a time. Set the  \`editable\`  property in the  \`GridColDef\`  object to  \`true\`  to allow editing cells of this column.


<DataGrid columns={[{ field: 'name', editable: true }]} /> 


### Start editing

If a cell is editable and has focus, any of the following interactions will start the edit mode:

-   A  Enter  keydown
-   A  Backspace  or  Delete  keydown. It will also delete the value and stops the edit mode instantly.
-   A keydown of any printable key, for instance  \`a\`,  \`E\`,  \`0\`, or  \`$\`
-   A double click on the cell
-   A call to  \`apiRef.current.setCellMode(id, field, 'edit')\`.


/**
 * Set the cellMode of a cell.
 * @param GridRowId
 * @param string
 * @param 'edit' | 'view'
 */
setCellMode: (id: GridRowId, field: string, mode: GridCellMode) => void;


### Stop editing

If a cell is in edit mode and has focus, any of the following interactions will stop the edit mode:

-   A  Escape  keydown. It will also roll back changes done in the value of the cell.
-   A  Tab  keydown. It will also save and goes to the next cell on the same row.
-   A  Enter  keydown. It will also save and goes to the next cell on the same column.
-   A mousedown outside the cell
-   A call to  \`apiRef.current.setCellMode(id, field, 'view')\`.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

// TODO v5: remove
function getThemePaletteMode(palette: any): string {
  return palette.type || palette.mode
}

const defaultTheme = createTheme()
const useStyles = makeStyles(
  (theme: Theme) => {
    const backgroundColor =
      getThemePaletteMode(theme.palette) === 'dark'
        ? '#376331'
        : 'rgb(217 243 190)'
    return {
      root: {
        '& .MuiDataGrid-cell--editable': {
          backgroundColor,
        },
      },
    }
  },
  { defaultTheme },
)

export const IsCellEditableGrid = story<DataGridProps>(args => {
  const classes = useStyles()
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        isCellEditable={params => params.row.age % 2 === 0}
      />
    </div>
  )
})
IsCellEditableGrid.storyName = 'Control cell editability'
IsCellEditableGrid.parameters = {
  docs: {
    description: {
      story: `In addition to the  \`editable\`  flag on columns, control which cell is editable using the  \`isCellEditable\`  prop.

In this demo, only the rows with an even  \`Age\`  value are editable. The editable cells have a green background for better visibility.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const CellEditControlGrid = story<DataGridProps>(args => {
  const [editRowsModel, setEditRowsModel] = React.useState({})

  const handleEditRowsModelChange = React.useCallback(
    (model: GridEditRowsModel) => {
      setEditRowsModel(model)
    },
    [],
  )

  return (
    <div style={{ width: '100%' }}>
      <Alert severity="info" style={{ marginBottom: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        />
      </div>
    </div>
  )
})
CellEditControlGrid.storyName = 'Controlled editing'
CellEditControlGrid.parameters = {
  docs: {
    description: {
      story: `The  \`editRowsModel\`  prop lets you control the editing state. You can handle the  \`onEditRowsModelChange\`  callback to control the  \`GridEditRowsModel\` state.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

//#region Column with valueGetter
const getFullName = (params: GridValueGetterParams) => {
  return `${params.getValue(params.id, 'firstName') || ''} ${
    params.getValue(params.id, 'lastName') || ''
  }`
}

export const ValueGetterGrid = story<DataGridProps>(args => {
  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 160,
      editable: true,
      valueGetter: getFullName,
      sortComparator: (v1, v2) => v1!.toString().localeCompare(v2!.toString()),
    },
  ]

  const defaultRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  ]
  const [rows, setRows] = React.useState<any[]>(defaultRows)

  const handleCellEditCommit = React.useCallback(
    ({ id, field, value }: GridCellEditCommitParams) => {
      if (field === 'fullName') {
        const [firstName, lastName] = value!.toString().split(' ')
        const updatedRows = rows.map(row => {
          if (row.id === id) {
            return { ...row, firstName, lastName }
          }
          return row
        })
        setRows(updatedRows)
      }
    },
    [rows],
  )
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellEditCommit={handleCellEditCommit}
      />
    </div>
  )
})
ValueGetterGrid.storyName = 'Column with valueGetter'
ValueGetterGrid.parameters = {
  docs: {
    description: {
      story: `You can control the committed value when the edit move stops with the \`onCellEditCommit\` prop. This is especially interesting when using the \`valueGetter\` on the column definition.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
//#endregion

//#region Client-side validation
const useStylesValidateRowModelControlGrid = makeStyles(
  (theme: Theme) => {
    const isDark = getThemePaletteMode(theme.palette) === 'dark'

    return {
      root: {
        '& .MuiDataGrid-cell--editing': {
          backgroundColor: 'rgb(255,215,115, 0.19)',
          color: '#1a3e72',
        },
        '& .Mui-error': {
          backgroundColor: `rgb(126,10,15, ${isDark ? 0 : 0.1})`,
          color: isDark ? '#ff4343' : '#750f0f',
        },
      },
    }
  },
  { defaultTheme },
)

const validateEmail = (email: GridCellValue) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const ValidateRowModelControlGrid = story<DataGridProps>(args => {
  const [editRowsModel, setEditRowsModel] = React.useState<GridEditRowsModel>(
    {},
  )
  const classes = useStylesValidateRowModelControlGrid()

  const columns: GridColumns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'email', headerName: 'Email', width: 200, editable: true },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
  ]

  const rows: GridRowsProp = [
    {
      id: 1,
      name: randomTraderName(),
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ]

  const handleEditRowsModelChange = React.useCallback(
    (newModel: GridEditRowsModel) => {
      const updatedModel = { ...newModel }
      Object.keys(updatedModel).forEach(id => {
        if (updatedModel[id].email) {
          const isValid = validateEmail(updatedModel[id].email.value)
          updatedModel[id].email = {
            ...updatedModel[id].email,
            error: !isValid,
          }
        }
      })
      setEditRowsModel(updatedModel)
    },
    [],
  )

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
    </div>
  )
})
ValidateRowModelControlGrid.storyName = 'Client-side validation'
ValidateRowModelControlGrid.parameters = {
  docs: {
    description: {
      story: `To validate the value in the cells, use  \`onEditRowsModelChange\`  to set the  \`error\`  attribute of the respective field when the value is invalid. If this attribute is true, the value will never be committed. This prop is invoked when a change is triggered by the edit cell component.

Alternatively, you can use the  \`GridEditRowsModel\`  state mentioned in the  [Controlled editing](https://mui.com/components/data-grid/editing/#controlled-editing)  section.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
//#endregion

//#region Server-side validation
const useStylesServerSideValidation = makeStyles(
  (theme: Theme) => {
    const isDark = getThemePaletteMode(theme.palette) === 'dark'

    return {
      root: {
        '& .MuiDataGrid-cell--editable': {
          backgroundColor: isDark ? '#376331' : 'rgb(217 243 190)',
        },
        '& .Mui-error': {
          backgroundColor: `rgb(126,10,15, ${isDark ? 0 : 0.1})`,
          color: isDark ? '#ff4343' : '#750f0f',
        },
      },
    }
  },
  { defaultTheme },
)

let promiseTimeout: any
function validateName(username: string): Promise<boolean> {
  const existingUsers = rows.map(row => row.name.toLowerCase())

  return new Promise<any>(resolve => {
    promiseTimeout = setTimeout(() => {
      resolve(existingUsers.indexOf(username.toLowerCase()) === -1)
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export const ValidateServerNameGrid = story<DataGridProps>(
  args => {
    const apiRef = useGridApiRef()
    const classes = useStylesServerSideValidation()

    const keyStrokeTimeoutRef = React.useRef<any>()

    const handleCellEditPropsChange = React.useCallback(
      async ({ id, field, props }: GridEditCellPropsParams, event) => {
        if (field === 'name') {
          clearTimeout(promiseTimeout)
          clearTimeout(keyStrokeTimeoutRef.current)

          let newModel = apiRef.current.getEditRowsModel()
          apiRef.current.setEditRowsModel({
            ...newModel,
            [id]: {
              ...newModel[id],
              [field]: { ...newModel[id][field], error: true },
            },
          })

          // basic debouncing here
          keyStrokeTimeoutRef.current = setTimeout(async () => {
            const data = props // Fix eslint value is missing in prop-types for JS files
            const isValid = await validateName(data.value!.toString())
            newModel = apiRef.current.getEditRowsModel()
            apiRef.current.setEditRowsModel({
              ...newModel,
              [id]: {
                ...newModel[id],
                [field]: { ...newModel[id][field], error: !isValid },
              },
            })
          }, 100)

          event.defaultMuiPrevented = true
        }
      },
      [apiRef],
    )

    React.useEffect(() => {
      return () => {
        clearTimeout(promiseTimeout)
        clearTimeout(keyStrokeTimeoutRef.current)
      }
    }, [])

    const columns: GridColumns = [
      {
        field: 'name',
        headerName: 'MUI Contributor',
        width: 180,
        editable: true,
      },
    ]

    const rows: GridRowsProp = [
      {
        id: 1,
        name: 'Damien',
      },
      {
        id: 2,
        name: 'Olivier',
      },
      {
        id: 3,
        name: 'Danail',
      },
      {
        id: 4,
        name: 'Matheus',
      },
      {
        id: 5,
        name: 'You?',
      },
    ]

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          className={classes.root}
          // apiRef={apiRef}
          rows={rows}
          columns={columns}
          onEditCellPropsChange={handleCellEditPropsChange}
          isCellEditable={params => params.row.id === 5}
        />
      </div>
    )
  },
  {
    storyName: 'Server-side validation',
    parameters: {
      docs: {
        description: {
          story: `Server-side validation works like client-side  [validation](https://mui.com/components/data-grid/editing/#client-side-validation).

-   Use  \`onEditCellPropsChange\`  to set the  \`error\`  attribute to true of the respective field which will be validated.
-   Validate the value in the server.
-   Once the server responds, set the  \`error\`  attribute to false if it is valid. This allows to commit it.

**Note:**  To prevent the default client-side behavior, set  \`event.defaultMuiPrevented\`  to  \`true\`.

This demo shows how you can validate a username asynchronously and prevent the user from committing the value while validating. It's using  \`DataGridPro\`  but the same approach can be used with  \`DataGrid\`.`,
        },
      },
    },
  },
)
//#endregion

//#region Custom edit component
function renderRating(params: any) {
  return <Rating readOnly value={params.value} />
}

const useStylesCustomEditComponent = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 16,
  },
})

function RatingEditInputCell(props: GridRenderCellParams) {
  const { id, value, api, field } = props
  const classes = useStylesCustomEditComponent()

  const handleChange = (event: any) => {
    api.setEditCellValue(
      { id, field, value: Number(event.target.value) },
      event,
    )
    // Check if the event is not from the keyboard
    // https://github.com/facebook/react/issues/7407
    if (event.nativeEvent.clientX !== 0 && event.nativeEvent.clientY !== 0) {
      api.commitCellChange({ id, field })
      api.setCellMode(id, field, 'view')
    }
  }

  const handleRef = (element: any) => {
    if (element) {
      element.querySelector(`input[value="${value}"]`).focus()
    }
  }

  return (
    <div className={classes.root}>
      <Rating
        ref={handleRef}
        name="rating"
        precision={1}
        value={Number(value)}
        onChange={handleChange}
      />
    </div>
  )
}

function renderRatingEditInputCell(params: any) {
  return <RatingEditInputCell {...params} />
}

export const RenderRatingEditCellGrid = story<DataGridProps>(args => {
  const columns = [
    {
      field: 'places',
      headerName: 'Places',
      width: 120,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      renderCell: renderRating,
      renderEditCell: renderRatingEditInputCell,
      editable: true,
      width: 180,
      type: 'number',
    },
  ]

  const rows = [
    { id: 1, places: 'Barcelona', rating: 5 },
    { id: 2, places: 'Rio de Janeiro', rating: 4 },
    { id: 3, places: 'London', rating: 3 },
    { id: 4, places: 'New York', rating: 2 },
  ]
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} {...args} />
    </div>
  )
})
RenderRatingEditCellGrid.storyName = 'Custom edit component'
RenderRatingEditCellGrid.parameters = {
  docs: {
    description: {
      story: `To customize the edit component of a column, use the  \`renderEditCell\`  attribute available in the  \`GridColDef\`.

The demo lets you edit the ratings by double-clicking the cell.`,
    },
  },
  creevey: {
    skip: 'Error: Expected image does not exist.',
  },
}
//#endregion

//#region Edit using external button
const useStylesStartEditButtonGrid = makeStyles(
  (theme: Theme) => ({
    root: {
      justifyContent: 'center',
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }),
  { defaultTheme },
)

interface EditToolbarProps {
  apiRef: GridApiRef
  selectedCellParams?: any
  setSelectedCellParams: (value: any) => void
}

const EditToolbar = (props: EditToolbarProps) => {
  const { selectedCellParams, apiRef, setSelectedCellParams } = props
  const classes = useStylesStartEditButtonGrid()

  const handleClick = () => {
    if (!selectedCellParams) {
      return
    }
    const { id, field, cellMode } = selectedCellParams
    if (cellMode === 'edit') {
      apiRef.current.commitCellChange({ id, field })
      apiRef.current.setCellMode(id, field, 'view')
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' })
    } else {
      apiRef.current.setCellMode(id, field, 'edit')
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' })
    }
  }

  const handleMouseDown = (event: any) => {
    // Keep the focus in the cell
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        color="primary"
      >
        {selectedCellParams?.cellMode === 'edit' ? 'Save' : 'Edit'}
      </Button>
    </div>
  )
}

export const StartEditButtonGrid = story<DataGridProps>(args => {
  const apiRef = useGridApiRef()
  const [
    selectedCellParams,
    setSelectedCellParams,
  ] = React.useState<GridCellParams | null>(null)

  const handleCellClick = React.useCallback((params: GridCellParams) => {
    setSelectedCellParams(params)
  }, [])

  const handleDoubleCellClick = React.useCallback((params, event) => {
    event.defaultMuiPrevented = true
  }, [])

  // Prevent from rolling back on escape
  const handleCellKeyDown = React.useCallback((params, event) => {
    if (
      ['Escape', 'Delete', 'Backspace', 'Enter'].includes(
        (event as React.KeyboardEvent).key,
      )
    ) {
      event.defaultMuiPrevented = true
    }
  }, [])

  // Prevent from committing on focus out
  const handleCellFocusOut = React.useCallback((params, event) => {
    if (params.cellMode === 'edit' && event) {
      event.defaultMuiPrevented = true
    }
  }, [])

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro
    //     rows={rows}
    //     columns={columns}
    //     apiRef={apiRef}
    //     onCellClick={handleCellClick}
    //     onCellDoubleClick={handleDoubleCellClick}
    //     onCellFocusOut={handleCellFocusOut}
    //     onCellKeyDown={handleCellKeyDown}
    //     components={{
    //       Toolbar: EditToolbar,
    //     }}
    //     componentsProps={{
    //       toolbar: {
    //         selectedCellParams,
    //         apiRef,
    //         setSelectedCellParams,
    //       },
    //     }}
    //   />
    // </div>
  )
})

StartEditButtonGrid.storyName = 'Edit using external button'
StartEditButtonGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`

You can override the default [start editing](https://mui.com/components/data-grid/editing/#start-editing) triggers using the [\`event.defaultMuiPrevented\`](https://mui.com/components/data-grid/events#disabling-the-default-behavior) on the synthetic React events.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
//#endregion

export const CatchEditingEventsGrid = story<DataGridProps>(args => {
  // TODO(storybook): Uncomment once we have DataGridPro
  // const apiRef = useGridApiRef()
  // const [message, setMessage] = React.useState('')

  // React.useEffect(() => {
  //   return apiRef.current.subscribeEvent(
  //     GridEvents.cellEditStart,
  //     (params: GridCellParams, event) => {
  //       setMessage(
  //         `Editing cell with value: ${params.value} and row id: ${
  //           params.id
  //         }, column: ${params.field}, triggered by ${
  //           (event as React.SyntheticEvent)!.type
  //         }.`,
  //       )
  //     },
  //   )
  // }, [apiRef])

  // React.useEffect(() => {
  //   return apiRef.current.subscribeEvent(GridEvents.cellEditStop, () => {
  //     setMessage('')
  //   })
  // }, [apiRef])

  // const columns: GridColumns = [
  //   { field: 'name', headerName: 'Name', width: 180, editable: true },
  //   { field: 'age', headerName: 'Age', type: 'number', editable: true },
  //   {
  //     field: 'dateCreated',
  //     headerName: 'Date Created',
  //     type: 'date',
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: 'lastLogin',
  //     headerName: 'Last Login',
  //     type: 'dateTime',
  //     width: 220,
  //     editable: true,
  //   },
  // ]

  // const rows: GridRowsProp = [
  //   {
  //     id: 1,
  //     name: randomTraderName(),
  //     age: 25,
  //     dateCreated: randomCreatedDate(),
  //     lastLogin: randomUpdatedDate(),
  //   },
  // ]

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro
    // <div style={{ width: '100%' }}>
    //   <div style={{ height: 180, width: '100%' }}>
    //     <DataGridPro rows={rows} columns={columns} apiRef={apiRef} />
    //   </div>
    //   {message && (
    //     <Alert severity="info" style={{ marginTop: 8 }}>
    //       {message}
    //     </Alert>
    //   )}
    // </div>
  )
})

CatchEditingEventsGrid.storyName = 'Events'
CatchEditingEventsGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`

The editing feature leverages the event capability of the grid and the apiRef. The following events can be imported and used to customize the edition:

-   \`cellEditStart\`: emitted when the cell turns to edit mode.
-   \`cellEditStop\`: emitted when the cell turns back to view mode.
-   \`cellEditCommit\`: emitted when the new value is committed.
-   \`editCellPropsChange\`: emitted when the props passed to the edit cell component are changed.

Catching events can be used to add a callback after an event while ignoring its triggers.

The demo shows how to catch the start & end edit events to log which cell is editing in an info message:`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const BasicRowEditingGrid = story<DataGridProps>(args => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid editMode="row" rows={rows} columns={columns} {...args} />
    </div>
  )
})
BasicRowEditingGrid.storyName = 'Row editing'
BasicRowEditingGrid.parameters = {
  docs: {
    description: {
      story: `Row editing allows to edit all the cells of a row at once. It is based on the  [cell editing](https://mui.com/components/data-grid/editing/#cell-editing), thus most of the features are also supported. To enable it, change the edit mode to  \`"row"\`  using the  \`editMode\`  prop, then set to  \`true\`  the  \`editable\`  property in the  \`GridColDef\`  object of those columns that should be editable.

<DataGrid editMode="row" columns={[{ field: 'name', editable: true }]} />

`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const RowEditControlGrid = story<DataGridProps>(args => {
  const [editRowsModel, setEditRowsModel] = React.useState({})

  const handleEditRowsModelChange = React.useCallback(
    (model: GridEditRowsModel) => {
      setEditRowsModel(model)
    },
    [],
  )

  return (
    <div style={{ width: '100%' }}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          editMode="row"
          onEditRowsModelChange={handleEditRowsModelChange}
        />
      </div>
      <Alert severity="info" style={{ marginTop: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert>
    </div>
  )
})
RowEditControlGrid.storyName = 'Start editing'
RowEditControlGrid.parameters = {
  docs: {
    description: {
      story: `If a cell is editable and has focus, any of the following interactions will start the edit mode of the corresponding row:

-   A  Enter  keydown
-   A double click on the cell
-   A call to  \`apiRef.current.setRowMode(id, 'edit')\`.


/**
* Sets the mode of a row.
* @param {GridRowId} id The id of the row.
* @param {GridRowMode} mode Can be: \`"edit"\`, \`"view"\`.
*/
setRowMode: (id: GridRowId, mode: GridRowMode) => void;    


### Stop editing

If a row is in edit mode and one of its cells is focused, any of the following interactions will stop the edit mode:

-   A  Escape  keydown. It will also roll back changes done in the row.
-   A  Enter  keydown. It will also save and goes to the cell at the next row at the same column.
-   A mouse click outside the row
-   A call to  \`apiRef.current.setRowMode(id, 'view')\`.

### Controlled editing

The  \`editRowsModel\`  prop lets you control the editing state. You can handle the  \`onEditRowsModelChange\`  callback to control the  \`GridEditRowsModel\`  state.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

const useStylesConditionalValidationGrid = makeStyles(
  (theme: Theme) => {
    const isDark = getThemePaletteMode(theme.palette) === 'dark'

    return {
      root: {
        '& .MuiDataGrid-cell--editing': {
          backgroundColor: 'rgb(255,215,115, 0.19)',
          color: '#1a3e72',
        },
        '& .Mui-error': {
          backgroundColor: `rgb(126,10,15, ${isDark ? 0 : 0.1})`,
          color: theme.palette.error.main,
        },
      },
    }
  },
  { defaultTheme },
)

export const ConditionalValidationGrid = story<DataGridProps>(args => {
  const classes = useStylesConditionalValidationGrid()
  const [editRowsModel, setEditRowsModel] = React.useState<GridEditRowsModel>(
    {},
  )

  const columns: GridColumns = [
    { field: 'expense', headerName: 'Expense', width: 160, editable: true },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'dueAt',
      headerName: 'Due at',
      type: 'date',
      width: 160,
      editable: true,
    },
    {
      field: 'isPaid',
      headerName: 'Is paid?',
      type: 'boolean',
      width: 140,
      editable: true,
    },
    {
      field: 'paidAt',
      headerName: 'Paid at',
      type: 'date',
      width: 160,
      editable: true,
    },
  ]

  const rows: GridRowsProp = [
    {
      id: 1,
      expense: 'Light bill',
      price: randomPrice(0, 1000),
      dueAt: new Date(2021, 6, 8),
      isPaid: false,
    },
    {
      id: 2,
      expense: 'Rent',
      price: randomPrice(0, 1000),
      dueAt: new Date(2021, 7, 1),
      isPaid: false,
    },
    {
      id: 3,
      expense: 'Car insurance',
      price: randomPrice(0, 1000),
      dueAt: new Date(2021, 7, 4),
      isPaid: true,
      paidAt: new Date(2021, 7, 2),
    },
  ]

  const handleEditRowsModelChange = React.useCallback(
    (newModel: GridEditRowsModel) => {
      const updatedModel = { ...newModel }
      Object.keys(updatedModel).forEach(id => {
        const hasError =
          updatedModel[id].isPaid.value && !updatedModel[id].paidAt.value
        updatedModel[id].paidAt = {
          ...updatedModel[id].paidAt,
          error: hasError,
        }
      })
      setEditRowsModel(updatedModel)
    },
    [],
  )

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        editMode="row"
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
    </div>
  )
})
ConditionalValidationGrid.storyName = 'Conditional validation'
ConditionalValidationGrid.parameters = {
  docs: {
    description: {
      story: `Having all cells of a row in edit mode allows validating a field based on the value of another one. To accomplish that, set the  \`onEditRowsModelChange\`  prop and return a new model with the  \`error\`  attribute of the invalid field set to  \`true\`. Use the other fields available in the model to check if the validation should run or not. Once at the least one field has the  \`error\`  attribute equals to true no new value will be committed.

**Note:**  For server-side validation, the same  [approach](https://mui.com/components/data-grid/editing/#server-side-validation)  from the cell editing can be used.

The following demo only requires a value for the "Paid at" column if the "Is paid?" column was checked.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

//#region Control with external buttons
const useStylesFullFeaturedCrudGrid = makeStyles(
  (theme: Theme) => ({
    actions: {
      color: theme.palette.text.secondary,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
  }),
  { defaultTheme },
)

interface EditToolbarProps {
  apiRef: GridApiRef
}

// const EditToolbar = (props: EditToolbarProps) => {
//   const { apiRef } = props

//   const handleClick = () => {
//     const id = randomId()
//     apiRef.current.updateRows([{ id, isNew: true }])
//     apiRef.current.setRowMode(id, 'edit')
//     // Wait for the grid to render with the new row
//     setTimeout(() => {
//       apiRef.current.scrollToIndexes({
//         rowIndex: apiRef.current.getRowsCount() - 1,
//       })
//       apiRef.current.setCellFocus(id, 'name')
//     }, 150)
//   }

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<Add />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   )
// }

export const FullFeaturedCrudGrid = story<DataGridProps>(args => {
  const classes = useStylesFullFeaturedCrudGrid()
  // const apiRef = useGridApiRef()

  // const handleRowEditStart = (
  //   params: GridRowParams,
  //   event: MuiEvent<React.SyntheticEvent>,
  // ) => {
  //   event.defaultMuiPrevented = true
  // }

  // const handleRowEditStop = (
  //   params: GridRowParams,
  //   event: MuiEvent<React.SyntheticEvent>,
  // ) => {
  //   event.defaultMuiPrevented = true
  // }

  // const handleEditClick = id => event => {
  //   event.stopPropagation()
  //   apiRef.current.setRowMode(id, 'edit')
  // }

  // const handleSaveClick = id => event => {
  //   event.stopPropagation()
  //   apiRef.current.commitRowChange(id)
  //   apiRef.current.setRowMode(id, 'view')

  //   const row = apiRef.current.getRow(id)
  //   apiRef.current.updateRows([{ ...row, isNew: false }])
  //4 }

  // const handleDeleteClick = id => event => {
  //   event.stopPropagation()
  //   apiRef.current.updateRows([{ id, _action: 'delete' }])
  // }

  // const handleCancelClick = id => event => {
  //   event.stopPropagation()
  //   apiRef.current.setRowMode(id, 'view')

  //   const row = apiRef.current.getRow(id)
  //   if (row!.isNew) {
  //     apiRef.current.updateRows([{ id, _action: 'delete' }])
  //   }
  // }

  const columns: GridColumns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', editable: true },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: classes.actions,
      // getActions: ({ id }) => {
      //   const isInEditMode = apiRef.current.getRowMode(id) === 'edit'

      //   if (isInEditMode) {
      //     return [
      //       <GridActionsCellItem
      //         icon={<Save />}
      //         label="Save"
      //         onClick={handleSaveClick(id)}
      //         color="primary"
      //       />,
      //       <GridActionsCellItem
      //         icon={<Cancel />}
      //         label="Cancel"
      //         className={classes.textPrimary}
      //         onClick={handleCancelClick(id)}
      //         color="inherit"
      //       />,
      //     ]
      //   }

      //   return [
      //     <GridActionsCellItem
      //       icon={<Edit />}
      //       label="Edit"
      //       className={classes.textPrimary}
      //       onClick={handleEditClick(id)}
      //       color="inherit"
      //     />,
      //     <GridActionsCellItem
      //       icon={<Delete />}
      //       label="Delete"
      //       onClick={handleDeleteClick(id)}
      //       color="inherit"
      //     />,
      //   ]
      // },
    },
  ]

  const rows: GridRowsProp = [
    {
      id: randomId(),
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: randomId(),
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: randomId(),
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: randomId(),
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: randomId(),
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ]

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro
    // <div style={{ height: 500, width: '100%' }}>
    //   <DataGridPro
    //     rows={rows}
    //     columns={columns}
    //     apiRef={apiRef}
    //     editMode="row"
    //     onRowEditStart={handleRowEditStart}
    //     onRowEditStop={handleRowEditStop}
    //     components={{
    //       Toolbar: EditToolbar,
    //     }}
    //     componentsProps={{
    //       toolbar: { apiRef },
    //     }}
    //   />
    // </div>
  )
})
FullFeaturedCrudGrid.storyName = 'Control with external buttons'
FullFeaturedCrudGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
You can  [disable the default behavior](https://mui.com/components/data-grid/events/#disabling-the-default-behavior)  of the grid and control the row edit using external buttons.

Here is shown how a full-featured CRUD can be created.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
//#endregion

export const RowEditingEvents = story<DataGridProps>(args => <></>)
RowEditingEvents.storyName = 'Events'
RowEditingEvents.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
The following events can be imported and used to customize the row edition:

-   \`rowEditStart\`: emitted when the row turns to edit mode.
-   \`rowEditStop\`: emitted when the row turns back to view mode.
-   \`rowEditCommit\`: emitted when the new row values are committed.
-   \`editCellPropsChange\`: emitted when the props passed to an edit cell component are changed.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const DataGridEditingApiRef = story<DataGridProps>(args => <></>)
DataGridEditingApiRef.storyName = 'apiRef'
DataGridEditingApiRef.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\` [apiRef](https://mui.com/components/data-grid/editing/#apiref)
      
The following events can be imported and used to customize the row edition:

-   \`commitCellChange()\`: Updates the field at the given id with the value sorted in the edit row model.
-   \`commitRowChange()\`: Updates the row at the given id with the values stored in the edit row model.
-   \`getCellMode()\`: Gets the mode of a cell.
-   \`getEditRowsModel()\`: Gets the edit rows model of the grid.
-   \`getRowMode()\`: Gets the mode of a row.
-   \`isCellEditable()\`: Controls if a cell is editable.
-   \`setCellMode()\`: Sets the mode of the cell.
-   \`setEditCellValue()\`: Sets the value of the edit cell. Commonly used inside the edit cell component.
-   \`setEditRowsModel()\`: Set the edit rows model of the grid.
-   \`setRowMode()\`: Sets the mode of a row.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
