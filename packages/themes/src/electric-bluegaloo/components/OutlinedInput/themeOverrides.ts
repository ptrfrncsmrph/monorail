import { Components, Theme } from '@mui/material'

export const MonorailOutlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] =
  {
    defaultProps: {
      notched: false,
      minRows: 3,
    },
    styleOverrides: {
      multiline: {
        padding: 0,
      },
      input: ({ theme }) => ({
        padding: theme.spacing(3),
      }),
      inputAdornedStart: {
        paddingLeft: 0,
      },
      inputAdornedEnd: {
        paddingRight: 0,
      },
    },
  }