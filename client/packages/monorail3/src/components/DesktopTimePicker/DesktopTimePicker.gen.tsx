// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIDesktopTimePicker,
  DesktopTimePickerProps as MUIDesktopTimePickerProps,
} from '@mui/lab/DesktopTimePicker'

/**
 * Props for DesktopTimePicker
 */
export type DesktopTimePickerProps<TDate = unknown> =
  MUIDesktopTimePickerProps<TDate> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }

/**
 * DesktopTimePicker
 */
export const DesktopTimePicker = React.forwardRef((props, ref) => (
  <MUIDesktopTimePicker ref={ref} {...props} />
)) as <TDate = unknown>(props: DesktopTimePickerProps<TDate>) => JSX.Element
