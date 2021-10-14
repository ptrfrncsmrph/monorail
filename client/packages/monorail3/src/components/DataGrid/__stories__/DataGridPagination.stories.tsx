// Edit this file to add new stories
import React from 'react'
import { DataGrid, DataGridProps } from '../DataGrid'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DataGrid.stories.gen'
import { DataRowModel, GridData, useDemoData } from '@mui/x-data-grid-generator'
import { GridRowId, GridRowsProp } from '@mui/x-data-grid'

export default { ...defaultStoryMeta, title: 'Data Grid/Pagination' }

const Template = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid pagination {...data} />
    </div>
  )
})

export const Default = story(Template)
Default.parameters = {
  docs: {
    description: {
      component: `Through pagination, a segment of data can be viewed from the assigned data source.

By default, the MIT  \`DataGrid\`  displays the rows with pagination, and up to 100 rows per page.

On the other hand, the commercial  \`DataGridPro\`  component displays, by default, all the rows with infinite scrolling (and virtualization) and without the 100 rows per page limitation. You need to set the  \`pagination\`  prop to enable the pagination feature in such a case.

### Basic example`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Page size
 */
export const SizePaginationGrid = story<DataGridProps>(args => {
  const [pageSize, setPageSize] = React.useState<number>(5)

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
      />
    </div>
  )
})

SizePaginationGrid.storyName = 'Page size'
SizePaginationGrid.parameters = {
  docs: {
    description: {
      story: `-   The default page size is  \`100\`, you can change this value with the  \`pageSize\`  prop.
-   You can configure the possible page size the user can choose from with the  \`rowsPerPageOptions\`  prop.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Controlled pagination
 */
export const ControlledPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })
  const [page, setPage] = React.useState(0)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        page={page}
        onPageChange={newPage => setPage(newPage)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        pagination
        {...data}
      />
    </div>
  )
})

ControlledPaginationGrid.storyName = 'Controlled pagination'
ControlledPaginationGrid.parameters = {
  docs: {
    description: {
      story: `While the previous demos show how the pagination can be uncontrolled, the active page can be controlled with the \`page\`/\`onPageChange\` props.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Auto size
 */
export const AutoPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid autoPageSize pagination {...data} />
    </div>
  )
})

AutoPaginationGrid.storyName = 'Auto size'
AutoPaginationGrid.parameters = {
  docs: {
    description: {
      story: `The \`autoPageSize\` prop allows to auto-scale the \`pageSize\` to match the container height and the max number of rows that can be displayed without a vertical scroll bar. By default, this feature is off.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Server-side pagination
 */
function loadServerRows(page: number, data: GridData): Promise<any> {
  return new Promise<any>(resolve => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5))
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export const ServerPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })
  const [page, setPage] = React.useState(0)
  const [rows, setRows] = React.useState<GridRowsProp>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    let active = true

    ;(async () => {
      setLoading(true)
      const newRows = await loadServerRows(page, data)

      if (!active) {
        return
      }

      setRows(newRows)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [page, data])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={newPage => setPage(newPage)}
        loading={loading}
      />
    </div>
  )
})

ServerPaginationGrid.storyName = 'Server-side pagination'
ServerPaginationGrid.parameters = {
  docs: {
    description: {
      story: `By default, pagination works on the client-side. To switch it to server-side, set \`paginationMode="server"\`. You also need to set the \`rowCount\` prop so that the grid knows the total number of pages. Finally, you need to handle the \`onPageChange\` callback to load the rows for the corresponding page.

**Note**: For more information regarding server-side pagination in combination with controlled selection check [here](https://mui.com/components/data-grid/selection/#usage-with-server-side-pagination)`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Cursor-based pagination
 */
interface ServerBasedGridResponse {
  rows: DataRowModel[]
  nextCursor: GridRowId | null | undefined
}

const PAGE_SIZE = 5

function loadServerRowsCursorPaginationGrid(
  cursor: GridRowId | null | undefined,
  data: GridData,
): Promise<ServerBasedGridResponse> {
  return new Promise<ServerBasedGridResponse>(resolve => {
    setTimeout(() => {
      const start = cursor ? data.rows.findIndex(row => row.id === cursor) : 0
      const end = start + PAGE_SIZE
      const rows = data.rows.slice(start, end)

      resolve({ rows, nextCursor: data.rows[end]?.id })
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export const CursorPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  const pagesNextCursor = React.useRef<{ [page: number]: GridRowId }>({})

  const [rows, setRows] = React.useState<GridRowsProp>([])
  const [page, setPage] = React.useState(0)
  const [loading, setLoading] = React.useState<boolean>(false)

  const handlePageChange = (newPage: number) => {
    // We have the cursor, we can allow the page transition.
    if (newPage === 0 || pagesNextCursor.current[newPage - 1]) {
      setPage(newPage)
    }
  }

  React.useEffect(() => {
    let active = true

    ;(async () => {
      const nextCursor = pagesNextCursor.current[page - 1]

      if (!nextCursor && page > 0) {
        return
      }

      setLoading(true)
      const response = await loadServerRowsCursorPaginationGrid(
        nextCursor,
        data,
      )

      if (response.nextCursor) {
        pagesNextCursor.current[page] = response.nextCursor
      }

      if (!active) {
        return
      }

      setRows(response.rows)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [page, data])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowCount={100}
        paginationMode="server"
        onPageChange={handlePageChange}
        page={page}
        loading={loading}
      />
    </div>
  )
})

CursorPaginationGrid.storyName = 'Cursor-based pagination'
CursorPaginationGrid.parameters = {
  docs: {
    description: {
      story: `You can adapt the pagination for your cursor-based pagination. To do so, you just have to keep track of the next cursor associated with each page you fetched.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Customization - Paginate > 100 rows
 */
export const BasisPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 1000,
    maxColumns: 6,
  })

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro pagination pageSize={200} rowsPerPageOptions={[200]} {...data} />
    // </div>
  )
})

BasisPaginationGrid.storyName = 'Customization'
BasisPaginationGrid.parameters = {
  docs: {
    description: {
      story: `You can customize the rendering of the pagination in the footer following [the component section](https://mui.com/components/data-grid/components/#pagination) of the documentation.

### Paginate > 100 rows

The  \`DataGrid\`  component can display up to 100 rows per page. The  \`DataGridPro\`  component removes this limitation. The following demo displays 200 rows per page:`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * apiRef - Pagination
 */
export const ApiRefPaginationGrid = story<DataGridProps>(args => {
  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const apiRef = useGridApiRef();
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  // const handleClick = () => {
  //   apiRef.current.setPage(1);
  // };

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div
    //   style={{
    //     width: '100%',
    //   }}
    // >
    //   <Button color="primary" variant="outlined" onClick={handleClick}>
    //     Set page 2
    //   </Button>
    //   <div style={{ height: 400, width: '100%', marginTop: 16 }}>
    //     <DataGridPro
    //       pagination
    //       pageSize={5}
    //       rowsPerPageOptions={[5]}
    //       apiRef={apiRef}
    //       {...data}
    //     />
    //   </div>
    // </div>
  )
})

ApiRefPaginationGrid.storyName = 'apiRef'
ApiRefPaginationGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`

The grid exposes a set of methods that enables all of these features using the imperative apiRef.

> ⚠️ Only use this API when you have no alternative. Always start from the declarative API that the grid exposes.

-   \`setPageSize\`: Set the number of rows in one page.
-   \`setPage\`: Set the displayed page.
-   \`onPageChange\`: Callback fired after a new page has been displayed.
-   \`onPageSizeChange\`: Callback fired after the page size was changed.

Below is an example of how you can reset the page using the imperative  \`setPage\`  method.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
