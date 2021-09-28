// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUINativeSelect,
  NativeSelectProps as MUINativeSelectProps,
} from '@mui/material/NativeSelect'

/**
 * Props for NativeSelect
 */
export type NativeSelectProps = MUINativeSelectProps & {
  ref?: React.ForwardedRef<unknown>
}

/**
 * NativeSelect
 */
export const NativeSelect = React.forwardRef((props, ref) => (
  <MUINativeSelect ref={ref} {...props} />
)) as (props: NativeSelectProps) => JSX.Element
