// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIStaticDateTimePicker,
  StaticDateTimePickerProps as MUIStaticDateTimePickerProps,
} from '@mui/lab/StaticDateTimePicker'

/**
 * Props for StaticDateTimePicker
 */
export type StaticDateTimePickerProps<TDate = unknown> =
  MUIStaticDateTimePickerProps<TDate> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }

/**
 * StaticDateTimePicker
 */
export const StaticDateTimePicker = React.forwardRef((props, ref) => (
  <MUIStaticDateTimePicker ref={ref} {...props} />
)) as <TDate = unknown>(props: StaticDateTimePickerProps<TDate>) => JSX.Element
