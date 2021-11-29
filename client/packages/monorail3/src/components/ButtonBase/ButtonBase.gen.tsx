// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  ButtonBaseProps as MUIButtonBaseProps,
  ButtonBaseTypeMap,
  default as MUIButtonBase,
} from '@mui/material/ButtonBase'

/**
 * Props for ButtonBase
 */
export type ButtonBaseProps<
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  P = {},
> = MUIButtonBaseProps<D, P> & { ref?: React.ForwardedRef<HTMLButtonElement> }

/**
 * ButtonBase
 */
export const ButtonBase = React.forwardRef((props, ref) => (
  <MUIButtonBase ref={ref} {...props} />
)) as <
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  P = {},
>(
  props: ButtonBaseProps<D, P>,
) => JSX.Element
