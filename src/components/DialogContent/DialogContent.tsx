import { DialogContent as MuiDialogContent } from '@mui/material'

declare module '@mui/material/DialogContent/DialogContent' {
  interface DialogContentProps {
    disablePadding?: boolean
  }
}

/**
 *
 * Demos:
 *
 * - [Dialogs](https://mui.com/material-ui/react-dialog/)
 *
 * API:
 *
 * - [DialogContent API](https://mui.com/material-ui/api/dialog-content/)
 */
export const DialogContent: typeof MuiDialogContent = MuiDialogContent

export * from '@mui/material/DialogContent'
