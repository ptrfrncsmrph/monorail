// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIListItemButton,
  ListItemButtonProps as MUIListItemButtonProps,
  ListItemButtonTypeMap,
} from '@mui/material/ListItemButton'

/**
 * Props for ListItemButton
 */
export type ListItemButtonProps<
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent'],
  P = {}
> = MUIListItemButtonProps<D, P> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * ListItemButton
 */
export const ListItemButton = React.forwardRef((props, ref) => (
  <MUIListItemButton ref={ref} {...props} />
)) as <
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent'],
  P = {}
>(
  props: ListItemButtonProps<D, P>,
) => JSX.Element
