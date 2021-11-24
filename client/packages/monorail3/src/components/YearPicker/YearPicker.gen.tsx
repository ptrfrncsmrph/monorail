// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIYearPicker,
  YearPickerProps as MUIYearPickerProps,
} from "@mui/lab/YearPicker";

/**
 * Props for YearPicker
 */
export type YearPickerProps<TDate> = MUIYearPickerProps<TDate> & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * YearPicker
 */
export const YearPicker = React.forwardRef((props, ref) => (
  <MUIYearPicker ref={ref} {...props} />
)) as <TDate>(props: YearPickerProps<TDate>) => JSX.Element;
