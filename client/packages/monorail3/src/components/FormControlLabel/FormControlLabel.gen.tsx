// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIFormControlLabel,
  FormControlLabelProps as MUIFormControlLabelProps,
} from '@mui/material/FormControlLabel'

/**
 * Props for FormControlLabel
 */
export type FormControlLabelProps = MUIFormControlLabelProps & {
  ref?: React.ForwardedRef<unknown>
}

/**
 * FormControlLabel
 */
export const FormControlLabel = React.forwardRef((props, ref) => (
  <MUIFormControlLabel ref={ref} {...props} />
)) as (props: FormControlLabelProps) => JSX.Element
