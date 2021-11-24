// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIStepConnector,
  StepConnectorProps as MUIStepConnectorProps,
} from "@mui/material/StepConnector";

/**
 * Props for StepConnector
 */
export type StepConnectorProps = MUIStepConnectorProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * StepConnector
 */
export const StepConnector = React.forwardRef((props, ref) => (
  <MUIStepConnector ref={ref} {...props} />
)) as (props: StepConnectorProps) => JSX.Element;
