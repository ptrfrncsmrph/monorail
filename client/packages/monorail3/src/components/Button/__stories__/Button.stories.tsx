// Edit this file to add new stories
import React from 'react'
import { Button, ButtonProps } from '../Button'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Button.stories.gen'

/**
 * Metadata for Button stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: { children: 'Button' },
})

/**
 * Default story for Button (edit/remove by hand if needed)
 * */
export const Default = story(Template)

export const Showcase = () => (
  <>
    <h1>Contained</h1>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="inherit">
      Inherit
    </Button>
    <h1>Outlined</h1>
    <Button variant="outlined" color="primary">
      Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
    <Button variant="outlined" color="inherit">
      Inherit
    </Button>
    <h1>Text</h1>
    <Button variant="text" color="primary">
      Primary
    </Button>
    <Button variant="text" color="secondary">
      Secondary
    </Button>
    <Button variant="text" color="inherit">
      Inherit
    </Button>
  </>
)

// TODO: add more stories below
