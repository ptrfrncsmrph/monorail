// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIButton,
  ButtonProps as MUIButtonProps,
  ButtonTypeMap,
} from '@material-ui/core/Button'

/**
 * Props for Button
 */
export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {}
> = MUIButtonProps<D, P> & { ref?: React.ForwardedRef<HTMLButtonElement> }

/**
 * Button
 */
export const Button = React.forwardRef((props, ref) => (
  <MUIButton ref={ref} {...props} />
)) as <D extends React.ElementType = ButtonTypeMap['defaultComponent'], P = {}>(
  props: ButtonProps<D, P>,
) => JSX.Element
