// Edit this file to add new stories
import React from 'react'
import { TablePagination, TablePaginationProps } from '../TablePagination'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TablePagination.stories.gen'
/**
 * Metadata for TablePagination stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TablePaginationProps>(
  args => (
    <TablePagination
      page={1}
      count={5}
      rowsPerPage={10}
      onPageChange={() => {}}
      {...args}
    />
  ),
  { args: {} },
)

/** Default story for TablePagination (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
