// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIDialogTitle,
  DialogTitleProps as MUIDialogTitleProps,
} from "@mui/material/DialogTitle";

/**
 * Props for DialogTitle
 */
export type DialogTitleProps = MUIDialogTitleProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * DialogTitle
 */
export const DialogTitle = React.forwardRef((props, ref) => (
  <MUIDialogTitle ref={ref} {...props} />
)) as (props: DialogTitleProps) => JSX.Element;
