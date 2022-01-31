// Edit this file to add new stories
import React from 'react'
import {
  DataGrid,
  DataGridProps,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'

import { story } from '../../../__tests__/helpers/storybook'

export default {
  title: 'Data Grid/Accessibility',
  component: DataGrid,
  parameters: {
    creevey: {
      skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
    },
  },
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  )
}

const Template = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  )
})

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `The Data Grid has complete accessibility support. For instance, every cell is accessible using the keyboard.

### Guidelines

The most commonly encountered conformance guidelines for accessibility are:

-   [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)- Globally accepted standard
-   [ADA](https://www.ada.gov/)- US Department of Justice
-   [Section 508](https://www.section508.gov/)- US federal agencies

WCAG 2.0 has three levels of conformance; A, AA, and AAA (in order of conformance). As meeting WCAG 2.0 level AA guidelines also meets the ADA and Section 508 standards, it's likely the standard that most organizations will want to target.

The  [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/#grid)  provides valuable insight on how to make the grid highly accessible.

### Density

You can change the density of the rows and the column header.

### Density selector

To enable the density selector, you need to compose a toolbar containing the  \`GridToolbarDensitySelector\`  component and apply it using the  \`Toolbar\`  property in the grid  \`components\`  prop.

The user can change the density of the data grid by using the density selector from the toolbar.

To hide the density selector add the disableDensitySelector prop to the data grid.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Density prop
 */
export const DensitySelectorSmallGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        density="compact"
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  )
})

DensitySelectorSmallGrid.storyName = 'Density prop'
DensitySelectorSmallGrid.parameters = {
  docs: {
    description: {
      story: `The vertical density of the data grid can be set using the \`density\` prop. The \`density\` prop applies the values determined by the \`rowHeight\` and \`headerHeight\` props if supplied. The user can override this setting with the toolbar density selector if provided.
      
**Keyboard navigation** - https://mui.com/components/data-grid/accessibility/#keyboard-navigation`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
