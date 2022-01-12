// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIRating,
  RatingProps as MUIRatingProps,
} from '@mui/material/Rating'

/**
 * Props for Rating
 */
export type RatingProps = MUIRatingProps & { ref?: React.ForwardedRef<unknown> }

/**
 * Rating
 */
export const Rating = React.forwardRef((props, ref) => (
  <MUIRating ref={ref} {...props} />
)) as (props: RatingProps) => JSX.Element
