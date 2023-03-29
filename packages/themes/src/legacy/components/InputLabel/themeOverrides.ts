import type { Components, Theme } from '@mui/material'

export const MonorailInputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    disableAnimation: true,
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        position: 'relative',
        left: theme.spacing(1), // Label above TextField
        top: 'auto',
        transform: 'none',
        background: 'transparent',
        color: theme.palette.default.main,
        marginBottom: theme.spacing(1),
        ...theme.typography.inputLabel,
      }
    },
  },
}
