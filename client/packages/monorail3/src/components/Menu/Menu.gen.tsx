// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIMenu,
  MenuProps as MUIMenuProps,
} from '@material-ui/core/Menu'
export type MenuProps = MUIMenuProps & { ref?: React.ForwardedRef<unknown> }
export const Menu = React.forwardRef((props, ref) => (
  <MUIMenu ref={ref} {...props} />
)) as (props: MenuProps) => ReturnType<typeof MUIMenu>
