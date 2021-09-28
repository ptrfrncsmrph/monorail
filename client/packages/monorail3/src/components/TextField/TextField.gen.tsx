// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField'

/**
 * Props for TextField
 */
export type TextFieldProps = MUITextFieldProps & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

/**
 * TextField
 */
export const TextField = React.forwardRef((props, ref) => (
  <MUITextField ref={ref} {...props} />
)) as (props: TextFieldProps) => JSX.Element
