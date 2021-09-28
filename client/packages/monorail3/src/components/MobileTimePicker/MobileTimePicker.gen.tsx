// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIMobileTimePicker,
  MobileTimePickerProps as MUIMobileTimePickerProps,
} from '@mui/lab/MobileTimePicker'

/**
 * Props for MobileTimePicker
 */
export type MobileTimePickerProps<
  TDate = unknown
> = MUIMobileTimePickerProps<TDate> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

/**
 * MobileTimePicker
 */
export const MobileTimePicker = React.forwardRef((props, ref) => (
  <MUIMobileTimePicker ref={ref} {...props} />
)) as <TDate = unknown>(props: MobileTimePickerProps<TDate>) => JSX.Element
