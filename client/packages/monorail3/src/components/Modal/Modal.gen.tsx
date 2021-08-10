// WARNING: This file is generated by a script, do not edit
import React from 'react'
import {
  default as MUIModal,
  ModalProps as MUIModalProps,
  ModalTypeMap,
} from '@material-ui/core/Modal'

/**
 * Props for Modal
 */
export type ModalProps<
  D extends React.ElementType = ModalTypeMap['defaultComponent'],
  P = {}
> = MUIModalProps<D, P> & { ref?: React.ForwardedRef<HTMLDivElement> }

/**
 * Modal
 */
export const Modal = React.forwardRef((props, ref) => (
  <MUIModal ref={ref} {...props} />
)) as <D extends React.ElementType = ModalTypeMap['defaultComponent'], P = {}>(
  props: ModalProps<D, P>,
) => JSX.Element
