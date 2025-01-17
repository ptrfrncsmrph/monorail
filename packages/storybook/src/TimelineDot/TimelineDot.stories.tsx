// Edit this file to add new stories
import React from 'react'

import type { TimelineDotProps } from '@monorail/components'
import { TimelineDot } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for TimelineDot stories - update/extend as needed
 */
export default {
  title: 'Data Display/Timeline/TimelineDot',
  component: TimelineDot,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TimelineDotProps>(args => <TimelineDot {...args} />, {
  args: {},
  muiName: 'MuiTimelineDot',
})
/** Default story for TimelineDot (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
