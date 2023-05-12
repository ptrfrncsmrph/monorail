import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { chipClasses, darken } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    variant: 'muted',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default', variant = 'muted' }, theme }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.light,
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          backgroundColor: theme.palette.default.lowEmphasis.light,
          boxShadow: `0 0 0 3px ${theme.palette.default.focusRing.outer}`,
          border: `1px solid ${theme.palette.default.focusRing.inner}`,
        },
      }

      const readOnlyRectangularStyles: CSSInterpolation = {
        borderRadius: 4,
        ...mutedVariantStyles,
      }

      const baseDraggableStyles: CSSInterpolation = {
        '&.react-draggable': {
          cursor: 'grab',
          '&:hover': {
            color:
              color === 'warning'
                ? theme.palette.warning.contrastText
                : theme.palette[color].dark,
            backgroundColor: theme.palette[color].lowEmphasis.main,
          },
        },
        '&.react-draggable-dragging': {
          cursor: 'grabbing',
          boxShadow: theme.shadows[4],
        },
      }

      return {
        border: '1px solid transparent',
        color: theme.palette[color].contrastText,
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
        },
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...baseDraggableStyles,
      }
    },
    label: ({ theme }) => ({
      ...theme.typography.chip,
    }),
    filled: ({ ownerState: { color = 'default' }, theme }) => {
      const backgroundColor = theme.palette[color].lowEmphasis.light
      const textColor =
        color === 'warning'
          ? theme.palette.warning.contrastText
          : theme.palette[color].main

      return {
        backgroundColor,
        color: textColor,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor,
        },
      }
    },
    outlined: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette[color].border.main,
        color:
          color === 'warning'
            ? theme.palette.warning.lowEmphasis.contrastText
            : theme.palette[color].main,
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette.background.paper,
        },
      }
    },
    clickable: ({
      ownerState: { color = 'default', variant = 'muted' },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        '&:hover': {
          backgroundColor: darken(
            theme.palette.default.lowEmphasis.main,
            theme.palette.action.hoverOpacity,
          ),
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette.default.lowEmphasis.main,
            theme.palette.action.activatedOpacity,
          ),
        },
      }

      const filledVariantStyles: CSSInterpolation = {
        '&:hover': {
          color:
            color === 'warning'
              ? theme.palette.warning.contrastText
              : theme.palette[color].dark,
          backgroundColor: theme.palette[color].lowEmphasis.main,
        },
        '&:active': {
          boxShadow: 'none',
          color:
            color === 'warning'
              ? theme.palette.warning.contrastText
              : theme.palette[color].dark,
          backgroundColor: theme.palette[color].lowEmphasis.dark,
        },
      }

      const outlinedVariantStyles: CSSInterpolation = {
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
        },
        [`&.${chipClasses.clickable}:active`]: {
          boxShadow: 'none',
          backgroundColor: theme.palette[color].lowEmphasis.active,
        },
      }

      const clickableRectangularStyles: CSSInterpolation = {
        borderRadius: 4,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.info.lowEmphasis.main,
        '&:hover': {
          backgroundColor: theme.palette.info.lowEmphasis.dark,
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette.info.lowEmphasis.dark,
            theme.palette.action.activatedOpacity,
          ),
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette.info.lowEmphasis.dark,
          boxShadow: `0 0 0 3px ${theme.palette.info.focusRing.outer}`,
          border: `1px solid ${theme.palette.info.focusRing.inner}`,
        },
        [`& > .${chipClasses.icon}`]: {
          color: theme.palette.info.main,
        },
      }

      return {
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && clickableRectangularStyles),
      }
    },
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.5, 1.25),
    }),
    icon: ({
      ownerState: { variant = 'muted', size = 'medium', color = 'default' },
      theme,
    }) => {
      return {
        color:
          color === 'warning'
            ? theme.palette.warning.contrastText
            : theme.palette[color].main,
        ...((variant === 'muted' || variant === 'rectangular') && {
          color: theme.palette.default.main,
        }),
        marginLeft:
          variant === 'rectangular' || variant === 'outlined'
            ? theme.spacing(1)
            : theme.spacing(2),
        marginRight: theme.spacing(-2),
        ...(size === 'small' && {
          marginLeft: 0,
          marginRight: theme.spacing(-1),
          fontSize: theme.typography.pxToRem(16),
        }),
      }
    },
    deleteIcon: ({
      theme,
      ownerState: { variant = 'muted', color = 'default', clickable = false },
    }) => ({
      marginRight: 3,
      color: theme.palette[color].lowEmphasis.contrastText,
      '&:hover': {
        color: theme.palette[color].main,
      },
      // Muted and Rectangular variants should not inherit the `color` prop
      ...((variant === 'muted' || variant === 'rectangular') && {
        color: theme.palette.default.lowEmphasis.contrastText,
        '&:hover': {
          color: theme.palette.default.main,
        },
      }),
      ...(variant === 'rectangular' &&
        clickable === true && {
          color: theme.palette.info.lowEmphasis.contrastText,
          '&:hover': {
            color: theme.palette.info.main,
          },
        }),
    }),
    avatar: ({
      ownerState: { clickable = false, color = 'default', variant = 'muted' },
      theme,
    }) => {
      const mutedVariantStyles: CSSInterpolation = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.default.lowEmphasis.dark,
      }

      const filledVariantStyles: CSSInterpolation = {
        color: theme.palette[color].main,
        backgroundColor: theme.palette[color].lowEmphasis.dark,
        ...(color === 'warning' && {
          color: theme.palette.warning.contrastText,
        }),
      }

      const outlinedVariantStyles: CSSInterpolation = {
        color: theme.palette[color].contrastText,
        backgroundColor:
          color === 'warning'
            ? theme.palette.warning.dark
            : theme.palette[color].main,
      }

      const readOnlyRectangularStyles: CSSInterpolation = mutedVariantStyles

      const clickableRectangularStyles: CSSInterpolation = {
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.main,
      }

      return {
        marginLeft: 4,
        ...(variant === 'muted' && mutedVariantStyles),
        ...(variant === 'filled' && filledVariantStyles),
        ...(variant === 'outlined' && outlinedVariantStyles),
        ...(variant === 'rectangular' && readOnlyRectangularStyles),
        ...(variant === 'rectangular' &&
          clickable &&
          clickableRectangularStyles),
      }
    },
  },
}
