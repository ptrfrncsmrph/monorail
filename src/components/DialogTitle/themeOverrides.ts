import { Components, Theme } from '@mui/material'

export const MonorailDialogTitleOverrides: Components<Theme>['MuiDialogTitle'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          height: theme.spacing(14),
        }
      },
    },
  }