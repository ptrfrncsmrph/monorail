// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  BottomNavigationActionProps as MUIBottomNavigationActionProps,
  default as MUIBottomNavigationAction,
} from "@mui/material/BottomNavigationAction";
import { ButtonBaseTypeMap } from "@mui/material/ButtonBase";

/**
 * Props for BottomNavigationAction
 */
export type BottomNavigationActionProps<
  D extends React.ElementType = ButtonBaseTypeMap["defaultComponent"],
  P = {}
> = MUIBottomNavigationActionProps<D, P> & {
  ref?: React.ForwardedRef<HTMLButtonElement>;
};

/**
 * BottomNavigationAction
 */
export const BottomNavigationAction = React.forwardRef((props, ref) => (
  <MUIBottomNavigationAction ref={ref} {...props} />
)) as <
  D extends React.ElementType = ButtonBaseTypeMap["defaultComponent"],
  P = {}
>(
  props: BottomNavigationActionProps<D, P>
) => JSX.Element;
