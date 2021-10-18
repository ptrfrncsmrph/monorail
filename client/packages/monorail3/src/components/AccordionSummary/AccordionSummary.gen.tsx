// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  AccordionSummaryProps as MUIAccordionSummaryProps,
  AccordionSummaryTypeMap,
  default as MUIAccordionSummary,
} from '@mui/material/AccordionSummary'

/**
 * Props for AccordionSummary
 */
export type AccordionSummaryProps<
  D extends React.ElementType = AccordionSummaryTypeMap['defaultComponent'],
  P = {}
> = MUIAccordionSummaryProps<D, P> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

/**
 * AccordionSummary
 */
export const AccordionSummary = React.forwardRef((props, ref) => (
  <MUIAccordionSummary ref={ref} {...props} />
)) as <
  D extends React.ElementType = AccordionSummaryTypeMap['defaultComponent'],
  P = {}
>(
  props: AccordionSummaryProps<D, P>,
) => JSX.Element
