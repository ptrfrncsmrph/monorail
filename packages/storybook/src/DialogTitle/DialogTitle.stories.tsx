// Edit this file to add new stories
import React from 'react'

import type { DialogTitleProps } from '@monorail/components'
import { DialogTitle } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for DialogTitle stories - update/extend as needed
 */
export default { title: 'Feedback/Dialog/DialogTitle', component: DialogTitle }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogTitleProps>(
  (args: DialogTitleProps) => <DialogTitle {...args}>Dialog Title</DialogTitle>,
  {
    args: {},
    muiName: 'MuiDialogTitle',
  },
)
/** Default story for DialogTitle (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
