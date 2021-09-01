// Edit this file to add new stories
import React from 'react'
import { YearPicker, YearPickerProps } from '../YearPicker'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './YearPicker.stories.gen'
import { action } from '@storybook/addon-actions'

/**
 * Metadata for YearPicker stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Inputs/Date and Time/Date/YearPicker',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<YearPickerProps<Date>>(
  args => {
    const minDate = new Date('2020-01-01T00:00:00.000')
    const maxDate = new Date('2034-01-01T00:00:00.000')
    const [date, setDate] = React.useState<Date | null>(new Date())

    return (
      <YearPicker
        date={date}
        isDateDisabled={() => false}
        minDate={minDate}
        maxDate={maxDate}
        onChange={newDate => setDate(newDate)}
        {...args}
      />
    )
  },
  {
    args: {},
  },
)

/** Default story for YearPicker (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `YearPicker is a low-level component for picking a year`,
      },
    },
  },
})
