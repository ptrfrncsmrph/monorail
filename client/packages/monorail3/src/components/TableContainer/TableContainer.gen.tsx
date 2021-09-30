// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUITableContainer,
  TableContainerProps as MUITableContainerProps,
  TableContainerTypeMap,
} from '@mui/material/TableContainer'

/**
 * Props for TableContainer
 */
export type TableContainerProps<
  D extends React.ElementType = TableContainerTypeMap['defaultComponent'],
  P = {}
> = MUITableContainerProps<D, P> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * TableContainer
 */
export const TableContainer = React.forwardRef((props, ref) => (
  <MUITableContainer ref={ref} {...props} />
)) as <
  D extends React.ElementType = TableContainerTypeMap['defaultComponent'],
  P = {}
>(
  props: TableContainerProps<D, P>,
) => JSX.Element
