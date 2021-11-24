// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIDivider,
  DividerProps as MUIDividerProps,
  DividerTypeMap,
} from "@mui/material/Divider";

/**
 * Props for Divider
 */
export type DividerProps<
  D extends React.ElementType = DividerTypeMap["defaultComponent"],
  P = {}
> = MUIDividerProps<D, P> & { ref?: React.ForwardedRef<HTMLHRElement> };

/**
 * Divider
 */
export const Divider = React.forwardRef((props, ref) => (
  <MUIDivider ref={ref} {...props} />
)) as <
  D extends React.ElementType = DividerTypeMap["defaultComponent"],
  P = {}
>(
  props: DividerProps<D, P>
) => JSX.Element;
