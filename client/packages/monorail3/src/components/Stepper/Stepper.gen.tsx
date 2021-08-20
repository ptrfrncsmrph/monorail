// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIStepper,
  StepperProps as MUIStepperProps,
} from '@material-ui/core/Stepper'

/**
 * Props for Stepper
 */
export type StepperProps = MUIStepperProps & {
  ref?: React.ForwardedRef<unknown>
}

/**
 * Stepper
 */
export const Stepper = React.forwardRef((props, ref) => (
  <MUIStepper ref={ref} {...props} />
)) as (props: StepperProps) => JSX.Element
