// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  BackdropProps as MUIBackdropProps,
  BackdropTypeMap,
  default as MUIBackdrop,
} from '@mui/material/Backdrop'

/**
 * Props for Backdrop
 */
export type BackdropProps<
  D extends React.ElementType = BackdropTypeMap['defaultComponent'],
  P = {}
> = MUIBackdropProps<D, P> & { ref?: React.ForwardedRef<unknown> }

/**
 * Backdrop
 */
export const Backdrop = React.forwardRef((props, ref) => (
  <MUIBackdrop ref={ref} {...props} />
)) as <
  D extends React.ElementType = BackdropTypeMap['defaultComponent'],
  P = {}
>(
  props: BackdropProps<D, P>,
) => JSX.Element
