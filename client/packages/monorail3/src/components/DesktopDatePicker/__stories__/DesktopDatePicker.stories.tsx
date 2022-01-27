// Edit this file to add new stories
import React from 'react'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'
import { TextField } from '../../TextField/TextField'
import { DesktopDatePicker, DesktopDatePickerProps } from '../DesktopDatePicker'
import { defaultStoryMeta } from './DesktopDatePicker.stories.gen'

export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/DesktopDatePicker',
}

const Template = story<DesktopDatePickerProps<Date>>(args => {
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
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `DesktopDatePicker is used when the user is in a desktop browser, based on a media-query check. This component should not likely be used directly.`,
      },
    },
  },
})
