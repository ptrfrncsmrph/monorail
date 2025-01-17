// Edit this file to add new stories
import React from 'react'

import type { FormGroupProps } from '@monorail/components'
import { Checkbox, FormControlLabel, FormGroup } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for FormGroup stories - update/extend as needed
 */
export default { title: 'Inputs/FormGroup', component: FormGroup }

const Template = story<FormGroupProps>(
  (args: FormGroupProps) => (
    <FormGroup {...args}>
      <FormControlLabel control={<Checkbox />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          component:
            'FormGroup is a helpful wrapper used to group selection control components.',
        },
      },
    },
    muiName: 'MuiFormGroup',
  },
)
export const Default = story(Template)
