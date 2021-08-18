// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUITimelineContent,
  TimelineContentProps as MUITimelineContentProps,
} from '@material-ui/lab/TimelineContent'

/**
 * Props for TimelineContent
 */
export type TimelineContentProps = MUITimelineContentProps & {
  ref?: React.ForwardedRef<unknown>
}

/**
 * TimelineContent
 */
export const TimelineContent = React.forwardRef((props, ref) => (
  <MUITimelineContent ref={ref} {...props} />
)) as (props: TimelineContentProps) => JSX.Element
