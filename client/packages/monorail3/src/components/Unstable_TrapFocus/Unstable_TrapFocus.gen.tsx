// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIUnstable_TrapFocus,
  TrapFocusProps as MUITrapFocusProps,
} from "@mui/material/Unstable_TrapFocus";

/**
 * Props for Unstable_TrapFocus
 */
export type Unstable_TrapFocusProps = MUITrapFocusProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * Unstable_TrapFocus
 */
export const Unstable_TrapFocus = React.forwardRef((props, ref) => (
  <MUIUnstable_TrapFocus ref={ref} {...props} />
)) as (props: Unstable_TrapFocusProps) => JSX.Element;
