// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from '@material-ui/lab/DateTimePicker'

/**
 * Props for DateTimePicker
 */
export type DateTimePickerProps<
  TDate = unknown
> = MUIDateTimePickerProps<TDate> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * DateTimePicker
 */
export const DateTimePicker = React.forwardRef((props, ref) => (
  <MUIDateTimePicker ref={ref} {...props} />
)) as <TDate = unknown>(props: DateTimePickerProps<TDate>) => JSX.Element
