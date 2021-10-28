// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIFormLabel,
  FormLabelProps as MUIFormLabelProps,
  FormLabelTypeMap,
} from '@mui/material/FormLabel'

/**
 * Props for FormLabel
 */
export type FormLabelProps<
  D extends React.ElementType = FormLabelTypeMap['defaultComponent'],
  P = {},
> = MUIFormLabelProps<D, P> & { ref?: React.ForwardedRef<HTMLLabelElement> }

/**
 * FormLabel
 */
export const FormLabel = React.forwardRef((props, ref) => (
  <MUIFormLabel ref={ref} {...props} />
)) as <
  D extends React.ElementType = FormLabelTypeMap['defaultComponent'],
  P = {},
>(
  props: FormLabelProps<D, P>,
) => JSX.Element
