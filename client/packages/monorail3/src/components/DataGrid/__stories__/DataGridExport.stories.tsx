// Edit this file to add new stories
import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";

import { story } from "../../../__tests__/helpers/storybook";
import {
  DataGrid,
  DataGridProps,
  GridToolbarContainer,
  GridToolbarExport,
} from "../DataGrid";
import { defaultStoryMeta } from "./DataGrid.stories.gen";

export default {
  ...defaultStoryMeta,
  title: "Data Grid/Export",
  parameters: {
    creevey: {
      skip: "Mismatch expected because data gets regenerated by mui/x-data-grid-generator.",
    },
  },
};

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Template = story<DataGridProps>((args) => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        {...args}
        {...data}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
});

export const Default = story(Template);

Default.parameters = {
  docs: {
    description: {
      component: `Easily export the rows in various file formats such as CSV, Excel, or PDF.

### CSV export

The DataGrid allows the data to be exported to CSV by composing a  [toolbar](https://mui.com/components/data-grid/components/#toolbar)  with the  \`GridToolbarExport\`  component. Use the  \`components\`  prop to assign the custom toolbar.`,
    },
  },
  creevey: {
    skip: true,
  },
};

/**
 * Customize exported columns
 */
export const CustomizeExportedColumns = story<DataGridProps>(() => <></>);
CustomizeExportedColumns.storyName = "Customize exported columns";
CustomizeExportedColumns.parameters = {
  docs: {
    description: {
      story: `By default, the CSV will only contain the visible columns of the grid. There are two ways to include or hide other columns:

1.  Define the exact columns to be exported with the  \`fields\`  attribute in the  [\`csvOptions\`](https://mui.com/api/data-grid/grid-export-csv-options/)  prop of  [\`GridToolbarExport\`](https://mui.com/components/data-grid/components/#toolbar).


      <GridToolbarExport csvOptions={{ fields: ['id', 'name'] }} />


Set  \`allColumns\`  in  [\`csvOptions\`](https://mui.com/api/data-grid/grid-export-csv-options/)  to true to include hidden columns, instead of only the visible ones.


    <GridToolbarExport csvOptions={{ allColumns: true }} />


2.  Set the  \`disableExport\`  attribute to true in each  \`GridColDef\`.


    <DataGrid columns={[{ field: 'id', disableExport: true }, { field: 'brand' }]} />


`,
    },
  },
  creevey: {
    skip: "Text-only story. Nothing to preview.",
  },
};

/**
 * Export custom rendered cells
 */
export const ExportCustomRenderedCells = story<DataGridProps>(() => <></>);
ExportCustomRenderedCells.storyName = "Export custom rendered cells";
ExportCustomRenderedCells.parameters = {
  docs: {
    description: {
      story: `When the value of a field is an object or a  \`renderCell\`  is provided, the CSV export might not display the value correctly. You can provide a  [\`valueFormatter\`](https://mui.com/components/data-grid/columns/#value-formatter)  with a string representation to be used.


    <DataGrid
      columns={[
        {
          field: 'progress',
          valueFormatter: ({ value }) => \`\${value * 100}%\`,
          renderCell: ({ value }) => <ProgressBar value={value} />,
        },
      ]}
    />
    
`,
    },
  },
  creevey: {
    skip: "Text-only story. Nothing to preview.",
  },
};

/**
 * Print
 */
export const Print = story<DataGridProps>(() => <></>);
Print.storyName = "Print";
Print.parameters = {
  docs: {
    description: {
      story: `>🚧 This feature isn't implemented yet. It's coming.

Optimization of the layout of the grid for print mode. It can also be used to export to PDF.`,
    },
  },
  creevey: {
    skip: "🚧 This feature isn't implemented yet. It's coming.",
  },
};

/**
 * Excel export
 */
export const ExcelExport = story<DataGridProps>(() => <></>);
ExcelExport.storyName = "Excel export";
ExcelExport.parameters = {
  docs: {
    description: {
      story: `>🚧 This feature isn't implemented yet. It's coming.

You will be able to export the displayed data to Excel with an API call, or using the grid UI.`,
    },
  },
  creevey: {
    skip: "🚧 This feature isn't implemented yet. It's coming.",
  },
};

/**
 * Clipboard
 */
export const Clipboard = story<DataGridProps>(() => <></>);
Clipboard.storyName = "Clipboard";
Clipboard.parameters = {
  docs: {
    description: {
      story: `>🚧 This feature isn't implemented yet. It's coming.

You will be able to copy and paste items to and from the grid using the system clipboard.`,
    },
  },
  creevey: {
    skip: "🚧 This feature isn't implemented yet. It's coming.",
  },
};
