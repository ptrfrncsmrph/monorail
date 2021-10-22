// Edit this file to add new stories
import React from 'react'
import { useDemoData } from '@mui/x-data-grid-generator'

import { story } from '../../../__tests__/helpers/storybook'
import { DataGrid, DataGridProps, GridToolbar } from '../DataGrid'
import { defaultStoryMeta } from './DataGrid.stories.gen'

export default { ...defaultStoryMeta, title: 'Data Grid/Localization' }

const Template = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  )
})

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `The Data Grid allows to support users from different locales, with formatting, RTL, and localized strings.

The default locale of MUI is English (United States). If you want to use other locales, follow the instructions below.

### Translation keys

You can use the  \`localeText\`  prop to pass in your own text and translations. You can find all the translation keys supported in  [the source](https://github.com/mui-org/material-ui-x/blob/HEAD/packages/grid/_modules_/grid/constants/localeTextConstants.ts)  in the GitHub repository. In the following example, the labels of the density selector are customized.`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const LocaleText = story<DataGridProps>(() => <></>)
LocaleText.storyName = 'Locale text'
LocaleText.parameters = {
  docs: {
    description: {
      story: `The default locale of MUI is English (United States).

You can use the theme to configure the locale text:

    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import { DataGrid, bgBG } from '@mui/x-data-grid';

    const theme = createTheme(
      {
        palette: {
          primary: { main: '#1976d2' },
        },
      },
      bgBG,
    );

    <ThemeProvider theme={theme}>
      <DataGrid />
    </ThemeProvider>;


Note that  \`createTheme\`  accepts any number of arguments. If you are already using the  [translations of the core components](https://mui.com/guides/localization/#locale-text), you can add  \`bgBG\`  as a new argument. The same import works for  \`DataGridPro\`  as it's an extension of  \`DataGrid\`.


    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import { DataGrid, bgBG } from '@mui/x-data-grid';
    import { bgBG as coreBgBG } from '@mui/material/locale';

    const theme = createTheme(
      {
        palette: {
          primary: { main: '#1976d2' },
        },
      },
      bgBG,
      coreBgBG,
    );

    <ThemeProvider theme={theme}>
      <DataGrid />
    </ThemeProvider>;


If you want to pass language translations directly to the grid without using  \`createTheme\`  and  \`ThemeProvider\`, you can directly load the language translations from the  \`@mui/x-data-grid\`  or  \`@mui/x-data-grid-pro\`  package.


	import { DataGrid, nlNL } from '@mui/x-data-grid';

	<DataGrid localeText={nlNL.props.MuiDataGrid.localeText} />;


### Supported locales
https://mui.com/components/data-grid/localization/#supported-locales`,
    },
  },
  creevey: {
    skip: 'Text-only story. Nothing to preview.',
  },
}
