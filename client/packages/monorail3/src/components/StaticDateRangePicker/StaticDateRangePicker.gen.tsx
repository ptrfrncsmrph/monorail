// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIStaticDateRangePicker,
  StaticDateRangePickerProps as MUIStaticDateRangePickerProps,
} from "@mui/lab/StaticDateRangePicker";

/**
 * Props for StaticDateRangePicker
 */
export type StaticDateRangePickerProps<TDate = unknown> =
  MUIStaticDateRangePickerProps<TDate> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  };

/**
 * StaticDateRangePicker
 */
export const StaticDateRangePicker = React.forwardRef((props, ref) => (
  // TODO: there is an issue with the ref type that needs to be investigated
  // @ts-ignore
  <MUIStaticDateRangePicker ref={ref} {...props} />
)) as <TDate = unknown>(
  props: StaticDateRangePickerProps<TDate>
) => JSX.Element;
