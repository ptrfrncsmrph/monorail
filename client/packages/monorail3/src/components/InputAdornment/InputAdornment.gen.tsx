// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIInputAdornment,
  InputAdornmentProps as MUIInputAdornmentProps,
  InputAdornmentTypeMap,
} from '@material-ui/core/InputAdornment'

/**
 * Props for InputAdornment
 */
export type InputAdornmentProps<
  D extends React.ElementType = InputAdornmentTypeMap['defaultComponent'],
  P = {}
> = MUIInputAdornmentProps<D, P> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * InputAdornment
 */
export const InputAdornment = React.forwardRef((props, ref) => (
  <MUIInputAdornment ref={ref} {...props} />
)) as <
  D extends React.ElementType = InputAdornmentTypeMap['defaultComponent'],
  P = {}
>(
  props: InputAdornmentProps<D, P>,
) => JSX.Element
