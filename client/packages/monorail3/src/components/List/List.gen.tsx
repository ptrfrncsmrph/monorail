// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUIList,
  ListProps as MUIListProps,
  ListTypeMap,
} from "@mui/material/List";

/**
 * Props for List
 */
export type ListProps<
  D extends React.ElementType = ListTypeMap["defaultComponent"],
  P = {}
> = MUIListProps<D, P> & { ref?: React.ForwardedRef<HTMLUListElement> };

/**
 * List
 */
export const List = React.forwardRef((props, ref) => (
  <MUIList ref={ref} {...props} />
)) as <D extends React.ElementType = ListTypeMap["defaultComponent"], P = {}>(
  props: ListProps<D, P>
) => JSX.Element;
