// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIRadio,
  RadioProps as MUIRadioProps,
} from '@mui/material/Radio'

/**
 * Props for Radio
 */
export type RadioProps = MUIRadioProps & {
  ref?: React.ForwardedRef<HTMLButtonElement>
}

/**
 * Radio
 */
export const Radio = React.forwardRef((props, ref) => (
  <MUIRadio ref={ref} {...props} />
)) as (props: RadioProps) => JSX.Element
