// Edit this file to add new stories
import React from 'react'

import type { MobileDateTimePickerProps } from '@monorail/components'
import { MobileDateTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for MobileDateTimePicker stories - update/extend as needed
 */
export default {
  title: 'Inputs/Date and Time/Date Time/MobileDateTimePicker',
  component: MobileDateTimePicker,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MobileDateTimePickerProps<Date>>(args => {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  )

  return (
    <MobileDateTimePicker
      value={value}
      onChange={newValue => {
        setValue(newValue)
      }}
      {...args}
    />
  )
})

/** Default story for MobileDateTimePicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `MobileDateTimePicker renders a date/time picker suitable for mobile browsers. This should not likely be used directly.`,
      },
    },
  },
})
