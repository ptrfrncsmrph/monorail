// Edit this file to add new stories
import React from 'react'
import { SpeedDial, SpeedDialProps } from '../SpeedDial'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './SpeedDial.stories.gen'

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import EditIcon from '@material-ui/icons/EditOutlined'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import PrintIcon from '@material-ui/icons/Print'
import Radio from '@material-ui/core/Radio/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import SaveIcon from '@material-ui/icons/Save'
import ShareIcon from '@material-ui/icons/Share'
import SpeedDialAction from '@material-ui/core/SpeedDialAction'
import SpeedDialIcon from '@material-ui/core/SpeedDialIcon'
import Switch from '@material-ui/core/Switch'
import Backdrop from '@material-ui/core/Backdrop'

export default { ...defaultStoryMeta }

const Template = story<SpeedDialProps>(
  ({ children, ...rest }) => (
    <SpeedDial ariaLabel="Speed Dial" {...rest}>
      {children}
    </SpeedDial>
  ),
  {
    args: {},
  },
)

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
]

export const BasicSpeedDial = story(
  () => {
    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        storyDescription: 'Basic speed dial',
        description: {
          story: `The floating action button can display related actions.`,
        },
      },
    },
  },
)

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}))

export const PlaygroundSpeedDial = story(() => {
  const [direction, setDirection] = React.useState<SpeedDialProps['direction']>(
    'up',
  )
  const [hidden, setHidden] = React.useState(false)

  const handleDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction'],
    )
  }

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked)
  }

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      />
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  )
})

export const ControlledOpenSpeedDial = story(
  () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial uncontrolled open example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        storyDescription: 'Controlled speed dial',
        description: {
          story: `The open state of the component can be controlled with the \`open\`/\`onOpen\`/\`onClose\` props.`,
        },
      },
    },
  },
)

export const CustomCloseIcon = story(Template, {
  args: {
    children: actions.map(action => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
    ariaLabel: 'SpeedDial openIcon example',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon openIcon={<EditIcon />} />,
  },
  parameters: {
    docs: {
      storyDescription: 'Custom close icon',
      description: {
        story: `You can provide an alternate icon for the closed and open states using the \`icon\` and \`openIcon\` props of the \`SpeedDialIcon\` component.`,
      },
    },
  },
})

export const SpeedDialTooltipOpen = story(
  () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        storyDescription: 'Persistent action tooltips',
        description: {
          story: `
The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices.

It is enabled here across all devices for demo purposes, but in production it could use the \`isTouch\` logic to conditionally set the prop.
          `,
        },
      },
    },
  },
)
