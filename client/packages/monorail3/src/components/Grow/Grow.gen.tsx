// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIGrow,
  GrowProps as MUIGrowProps,
} from '@material-ui/core/Grow'

/**
 * Props for Grow
 */
export type GrowProps = MUIGrowProps & { ref?: React.ForwardedRef<unknown> }

/**
 * Grow
 */
export const Grow = React.forwardRef((props, ref) => (
  <MUIGrow ref={ref} {...props} />
)) as (props: GrowProps) => JSX.Element
