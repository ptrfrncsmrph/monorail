// Edit this file to add new stories
import React from 'react'
import { TableFooter, TableFooterProps } from '../TableFooter'
import { TableRow } from '../../TableRow/TableRow'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TableFooter.stories.gen'
import { TableCell } from '../../TableCell/TableCell'

export default { ...defaultStoryMeta }

const Template = story<TableFooterProps>(args => (
  <TableFooter {...args}>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
    </TableRow>
  </TableFooter>
))

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `TableFooter is a sub-component of Table which wraps the footer row(s) of the Table`,
      },
    },
  },
})
