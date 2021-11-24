// WARNING: This file is generated by a script, do not edit
import React from "react";
import {
  default as MUITreeItem,
  TreeItemProps as MUITreeItemProps,
} from "@mui/lab/TreeItem";

/**
 * Props for TreeItem
 */
export type TreeItemProps = MUITreeItemProps & {
  ref?: React.ForwardedRef<unknown>;
};

/**
 * TreeItem
 */
export const TreeItem = React.forwardRef((props, ref) => (
  <MUITreeItem ref={ref} {...props} />
)) as (props: TreeItemProps) => JSX.Element;
