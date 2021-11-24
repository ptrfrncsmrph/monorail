// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  CalendarPickerSkeletonProps as MUICalendarPickerSkeletonProps,
  default as MUICalendarPickerSkeleton,
} from "@mui/lab/CalendarPickerSkeleton";

/**
 * Props for CalendarPickerSkeleton
 */
export type CalendarPickerSkeletonProps = MUICalendarPickerSkeletonProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * CalendarPickerSkeleton
 */
export const CalendarPickerSkeleton = React.forwardRef((props, ref) => (
  <MUICalendarPickerSkeleton ref={ref} {...props} />
)) as (props: CalendarPickerSkeletonProps) => JSX.Element;
