// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIMobileStepper,
  MobileStepperProps as MUIMobileStepperProps,
} from "@mui/material/MobileStepper";

/**
 * Props for MobileStepper
 */
export type MobileStepperProps = MUIMobileStepperProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * MobileStepper
 */
export const MobileStepper = React.forwardRef((props, ref) => (
  <MUIMobileStepper ref={ref} {...props} />
)) as (props: MobileStepperProps) => JSX.Element;
