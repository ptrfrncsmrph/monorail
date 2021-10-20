// Edit this file to add new stories
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import PhoneIcon from '@mui/icons-material/Phone'
import { TabPanel as LabTabPanel } from '@mui/lab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { AppBar, Box, styled, Tab, Typography } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
import { Tabs, TabsProps } from '../Tabs'
import { defaultStoryMeta } from './Tabs.stories.gen'

/**
 * Metadata for Tabs stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Navigation/Tabs',
  parameters: {
    creevey: {
      skip: 'Underline length is flakey',
    },
  },
}
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Template = story<TabsProps>(
  args => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            {...args}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    )
  },
  { args: {} },
)
/** Default story for Tabs (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicTabs = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `A basic example with tab panels.`,
      },
    },
  },
})

export const ExperimentalAPI = story(
  () => {
    const [value, setValue] = React.useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <LabTabPanel value="1">Item One</LabTabPanel>
          <LabTabPanel value="2">Item Two</LabTabPanel>
          <LabTabPanel value="3">Item Three</LabTabPanel>
        </TabContext>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            '`@mui/lab` offers utility components that inject props to implement accessible tabs following [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)',
        },
      },
    },
  },
)

export const WrappedLabels = story(
  () => {
    const [value, setValue] = React.useState('one')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
            wrapped
          />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.',
        },
      },
    },
  },
)

export const ColoredTab = story(() => {
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  )
})

export const DisabledTab = story(() => {
  const [value, setValue] = React.useState(2)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>
  )
})

export const FixedTabs = story(
  () => {
    interface TabPanelProps {
      children?: React.ReactNode
      dir?: string
      index: number
      value: number
    }

    function TabPanel(props: TabPanelProps) {
      const { children, value, index, ...other } = props

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      )
    }

    function a11yProps(index: number) {
      return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
      }
    }

    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
      setValue(index)
    }

    return (
      <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={'left'}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={'left'}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={'left'}>
          Item Three
        </TabPanel>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.',
        },
      },
    },
  },
)

export const FullWidth = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            fullWidth
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.',
        },
      },
    },
  },
)

export const Centered = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: 'The `centered` prop should be used for larger views.',
        },
      },
    },
  },
)

export const ScrollableTabs = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'By default, left and right scroll buttons are automatically presented on desktop and hidden on mobile. (based on viewport width)',
        },
      },
    },
  },
)

export const ForcedScrollButtons = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Left and right scroll buttons be presented (reserve space) regardless of the viewport width with `scrollButtons={true}` `allowScrollButtonsMobile`:',
        },
      },
    },
  },
)

export const PreventScrollButtons = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Left and right scroll buttons are never be presented with `scrollButtons={false}`. All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift mouse wheel, etc.)',
        },
      },
    },
  },
)

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
})

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}))

interface StyledTabsProps {
  children?: React.ReactNode
  value: number
  onChange: (event: React.SyntheticEvent, newValue: number) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
})

interface StyledTabProps {
  label: string
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}))

export const Customization = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ bgcolor: '#fff' }}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Tab 1" />
            <AntTab label="Tab 2" />
            <AntTab label="Tab 3" />
          </AntTabs>
          <Box sx={{ p: 3 }} />
        </Box>
        <Box sx={{ bgcolor: '#2e1534' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Workflows" />
            <StyledTab label="Datasets" />
            <StyledTab label="Connections" />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/).',
        },
      },
    },
  },
)

// NOTE: redeclaring TabPanel and a11yProps with V to signify vertical variants
function TabPanelV(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yPropsV(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export const VerticalTabs = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Item One" {...a11yPropsV(0)} />
          <Tab label="Item Two" {...a11yPropsV(1)} />
          <Tab label="Item Three" {...a11yPropsV(2)} />
          <Tab label="Item Four" {...a11yPropsV(3)} />
          <Tab label="Item Five" {...a11yPropsV(4)} />
          <Tab label="Item Six" {...a11yPropsV(5)} />
          <Tab label="Item Seven" {...a11yPropsV(6)} />
        </Tabs>
        <TabPanelV value={value} index={0}>
          Item One
        </TabPanelV>
        <TabPanelV value={value} index={1}>
          Item Two
        </TabPanelV>
        <TabPanelV value={value} index={2}>
          Item Three
        </TabPanelV>
        <TabPanelV value={value} index={3}>
          Item Four
        </TabPanelV>
        <TabPanelV value={value} index={4}>
          Item Five
        </TabPanelV>
        <TabPanelV value={value} index={5}>
          Item Six
        </TabPanelV>
        <TabPanelV value={value} index={6}>
          Item Seven
        </TabPanelV>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'To make vertical tabs instead of default horizontal ones, there is `orientation="vertical"`:',
        },
      },
    },
  },
)

interface LinkTabProps {
  label?: string
  href?: string
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

export const NavTabs = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            "By default, tabs use a `button` element, but you can provide your custom tag or component. Here's an example of implementing tabbed navigation:",
        },
      },
    },
  },
)

export const IconTabs = story(
  () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab icon={<PhoneIcon />} aria-label="phone" />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: 'Tab labels may be either all icons or all text.',
        },
      },
    },
  },
)

export const Accessibility = story(
  () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#tabpanel)
  
The following steps are needed in order to provide necessary information for assistive technologies:
            
Label Tabs via \`aria-label\`l or \`aria-labelledby\`.
\`Tabs\`s need to be connected to their corresponding \`[role="tabpanel"]\` by setting the correct \`id\`, \`aria-controls\` and \`aria-labelledby\`.
An example for the current implementation can be found in the demos on this page. We've also published an experimental API in \`@mui/lab\` that does not require extra work.
            
Keyboard navigation
The components implement keyboard navigation using the "manual activation" behavior. If you want to switch to the "selection automatically follows focus" behavior you have pass \`selectionFollowsFocus\` to the \`Tabs\` component. The WAI-ARIA authoring practices have a detailed guide on how to decide when to make selection automatically follow focus.`,
        },
      },
    },
  },
)
