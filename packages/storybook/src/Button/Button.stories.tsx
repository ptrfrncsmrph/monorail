// Edit this file to add new stories
import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import SelectAllOutlined from '@mui/icons-material/SelectAllOutlined'
import { capitalize } from '@mui/material'

import type { ButtonProps } from '@monorail/components'
import {
  Box,
  Button,
  LoadingButton,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Button stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/Button', component: Button }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: { children: 'It Worked!' },
  muiName: 'MuiButton',
})

/**
 * Default story for Button (edit/remove by hand if needed)
 * */
export const Default = story(Template, {
  args: { children: 'Button', variant: 'contained' },
})

// TODO: Add tertiary color
const colors = ['primary', 'success', 'error', 'warning', 'info'] as const
const variants = ['contained', 'outlined', 'text'] as const
const sizes = ['small', 'medium', 'large'] as const

const buttons = variants.map(variant => (
  <Box mb={10} key={variant}>
    <Typography variant="h1">{capitalize(variant)}</Typography>
    {sizes.map(size => (
      <React.Fragment key={size}>
        <Typography variant="subtitle1" my={2}>
          {capitalize(size)}
        </Typography>
        <Stack direction="row" spacing={2} my={2}>
          {colors.map(color => (
            <Button
              key={`${variant}-${size}-${color}`}
              variant={variant}
              color={color}
              size={size}
            >
              {color}
            </Button>
          ))}
        </Stack>
      </React.Fragment>
    ))}
    <Typography variant="subtitle1" my={2}>
      Disabled
    </Typography>
    <Stack direction="row" spacing={2} my={2}>
      {colors.map(color => (
        <Button
          disabled
          variant={variant}
          color={color}
          size="medium"
          key={`${variant}-${color}-disabled`}
        >
          Disabled
        </Button>
      ))}
    </Stack>
    <Typography variant="subtitle1" my={2}>
      Inverted
    </Typography>
    <Typography>
      Used when placing buttons on top of colored containers to create contrast.
      Inverted text and inverted outlined Buttons inherit the text color of the
      containing element. See the Alert/Actions story for examples.
    </Typography>
    <Stack
      direction="row"
      spacing={2}
      my={2}
      sx={{
        p: 2,
        bgcolor: 'default.light',
      }}
    >
      {colors.map(color => (
        <Button
          variant={variant}
          color={color}
          size="medium"
          key={`${variant}-${color}-inverted`}
          inverted
        >
          {color}
        </Button>
      ))}
    </Stack>
  </Box>
))

export const VariantsAndColors = story<ButtonProps>(() => <>{buttons}</>, {
  parameters: {
    docs: {
      description: {
        story: `Use variant to set the display style and color to set the coloring`,
      },
    },
    a11y: {
      /**
       * Our orange buttons failed the WCAG 2.0 contrast test.
       * It does pass APCA (WCAG 3), which is what we used for our Monorail3 color palette.
       * Unfortunately, APCA isn't supported yet in axe's config options, but it something we should track.
       * https://github.com/dequelabs/axe-core/issues/3325
       * GS 6/13/22
       */
      disable: true,
    },
  },
})

export const Sizes = story<ButtonProps>(
  () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" size={'small'}>
        Small
      </Button>
      <Button variant="contained" size={'medium'}>
        Medium
      </Button>
      <Button variant="contained" size={'large'}>
        Large
      </Button>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: 'For larger or smaller buttons, use the size prop.',
        },
      },
    },
  },
)

export const ButtonsWithIconsAndLabel = story<ButtonProps>(
  () => (
    <React.Fragment>
      {variants.map(variant => (
        <Box mb={10} key={variant}>
          <Typography variant="h1">{capitalize(variant)}</Typography>
          <Stack direction="column" spacing={4} margin={2}>
            {sizes.map(size => (
              <Stack direction="row" spacing={2} key={size}>
                <Button
                  variant={variant}
                  size={size}
                  startIcon={<SelectAllOutlined />}
                >
                  {size}
                </Button>
                <Button
                  variant={variant}
                  size={size}
                  endIcon={<SelectAllOutlined />}
                >
                  {size}
                </Button>
              </Stack>
            ))}
          </Stack>
        </Box>
      ))}
    </React.Fragment>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.`,
        },
      },
    },
  },
)

export const LoadingButtons = story<ButtonProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <LoadingButton variant="contained" loading>
        Submit
      </LoadingButton>
      <LoadingButton loading>Submit</LoadingButton>
      <LoadingButton
        loading
        loadingIndicator="Loading..."
        variant="outlined"
        color="success"
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="text"
        color="error"
      >
        Save
      </LoadingButton>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The loading buttons can show loading state and disable interactions.`,
        },
      },
    },
  },
)
