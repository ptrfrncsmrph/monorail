// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUITableBody,
  TableBodyProps as MUITableBodyProps,
  TableBodyTypeMap,
} from '@mui/material/TableBody'

/**
 * Props for TableBody
 */
export type TableBodyProps<
  D extends React.ElementType = TableBodyTypeMap['defaultComponent'],
  P = {},
> = MUITableBodyProps<D, P> & {
  ref?: React.ForwardedRef<HTMLTableSectionElement>
}

/**
 * TableBody
 */
export const TableBody = React.forwardRef((props, ref) => (
  <MUITableBody ref={ref} {...props} />
)) as <
  D extends React.ElementType = TableBodyTypeMap['defaultComponent'],
  P = {},
>(
  props: TableBodyProps<D, P>,
) => JSX.Element
