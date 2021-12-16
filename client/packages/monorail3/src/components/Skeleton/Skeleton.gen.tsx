// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUISkeleton,
  SkeletonProps as MUISkeletonProps,
  SkeletonTypeMap,
} from '@mui/material/Skeleton'

/**
 * Props for Skeleton
 */
export type SkeletonProps<
  D extends React.ElementType = SkeletonTypeMap['defaultComponent'],
  P = {},
> = MUISkeletonProps<D, P> & { ref?: React.ForwardedRef<HTMLSpanElement> }

/**
 * Skeleton
 */
export const Skeleton = React.forwardRef((props, ref) => (
  <MUISkeleton ref={ref} {...props} />
)) as <
  D extends React.ElementType = SkeletonTypeMap['defaultComponent'],
  P = {},
>(
  props: SkeletonProps<D, P>,
) => JSX.Element
