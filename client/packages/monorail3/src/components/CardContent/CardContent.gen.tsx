// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUICardContent,
  CardContentProps as MUICardContentProps,
  CardContentTypeMap,
} from '@mui/material/CardContent'

/**
 * Props for CardContent
 */
export type CardContentProps<
  D extends React.ElementType = CardContentTypeMap['defaultComponent'],
  P = {},
> = MUICardContentProps<D, P> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * CardContent
 */
export const CardContent = React.forwardRef((props, ref) => (
  <MUICardContent ref={ref} {...props} />
)) as <
  D extends React.ElementType = CardContentTypeMap['defaultComponent'],
  P = {},
>(
  props: CardContentProps<D, P>,
) => JSX.Element
