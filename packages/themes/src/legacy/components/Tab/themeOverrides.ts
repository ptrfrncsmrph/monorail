import type { Components, Theme } from '@mui/material'
import { svgIconClasses, tabClasses } from '@mui/material'

export const MonorailTabOverrides: Components<Theme>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(2, 3),
      minHeight: theme.spacing(6),
      minWidth: 'min-content',
      ...theme.typography.tabInactive,
      [`&.${tabClasses.selected}`]: {
        ...theme.typography.tabActive,
      },
      ...(ownerState.icon !== undefined && {
        [`& .${svgIconClasses.root}`]: {
          marginTop: theme.spacing(-0.5),
          marginBottom: theme.spacing(-0.5),
        },
      }),
    }),
    labelIcon: {
      [`& .${svgIconClasses.root}`]: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },
    },
    textColorPrimary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
      },
    }),
    textColorSecondary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
      },
    }),
  },
}
