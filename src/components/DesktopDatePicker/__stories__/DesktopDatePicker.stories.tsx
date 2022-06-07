// Edit this file to add new stories
import React from 'react'
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/lab'
import { TextField } from '@mui/material'
import { action } from '@storybook/addon-actions'

import { story } from '../../../test-helpers/storybook'

export default {
  title: 'Inputs/Date and Time/Date/DesktopDatePicker',
  component: DesktopDatePicker,
}

const Template = story<DesktopDatePickerProps<Date>>(
  (args: Partial<DesktopDatePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(
      new Date('2021-01-01T12:34:00.000Z'),
    )

    return (
      <DesktopDatePicker
        label="Desktop Date Picker"
        value={value}
        renderInput={params => <TextField id="desktop" {...params} />}
        onChange={newValue => {
          setValue(newValue)
          action('onChange')
        }}
        {...args}
      />
    )
  },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopDatePicker is used when the user is in a desktop browser, based on a media-query check. This component should not likely be used directly.`,
      },
    },
  },
})
