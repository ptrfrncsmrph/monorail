// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIToggleButton,
  ToggleButtonProps as MUIToggleButtonProps,
  ToggleButtonTypeMap,
} from '@mui/material/ToggleButton'

/**
 * Props for ToggleButton
 */
export type ToggleButtonProps<
  D extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  P = {},
> = MUIToggleButtonProps<D, P> & { ref?: React.ForwardedRef<HTMLButtonElement> }

/**
 * ToggleButton
 */
export const ToggleButton = React.forwardRef((props, ref) => (
  <MUIToggleButton ref={ref} {...props} />
)) as <
  D extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  P = {},
>(
  props: ToggleButtonProps<D, P>,
) => JSX.Element
