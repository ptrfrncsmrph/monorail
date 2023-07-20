import type { Components, Theme } from '@mui/material'
import {
  checkboxClasses,
  dividerClasses,
  typographyClasses,
} from '@mui/material'

import { dataGridClasses } from '@monorail/components'

export const MonorailDataGridOverrides: Components<Theme>['MuiDataGrid'] = {
  defaultProps: {
    rowHeight: 40,
    columnHeaderHeight: 42,
    slotProps: {
      baseIconButton: {
        size: 'medium',
        // Override the explicit { fontSize: 'small' } in GridActionsCellItem
        // See https://github.com/mui/mui-x/blob/62725ed4ba26788f454e93a73c7273ac54d762fd/packages/grid/x-data-grid/src/components/cell/GridActionsCellItem.tsx#L39
        sx: { [`& svg`]: { fontSize: 'inherit' } },
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        border: 'none',
        borderRadius: 0,
        [`& .${dataGridClasses['columnSeparator--sideRight']}`]: {
          right: theme.spacing(-2),
        },
      }
    },
    row: ({ theme }) => {
      return {
        [`&.${dataGridClasses.grouped}`]: {
          backgroundColor: theme.palette.default.lowEmphasis.light,
        },
        ['&:hover']: {
          backgroundColor: theme.palette.default.lowEmphasis.hover,
        },
        [`&.${dataGridClasses.grouped}:hover`]: {
          cursor: 'pointer',
        },
      }
    },
    columnHeaders: ({ theme }) => {
      return {
        backgroundColor: theme.palette.default.lowEmphasis.light,
        borderBottom: 'none',
        boxShadow: `inset 0px -1px ${theme.palette.divider}`,
        borderRadius: '0',
        [`&.${dataGridClasses.grouped}`]: {
          backgroundColor: 'transparent',
        },
      }
    },
    columnHeader: ({ theme }) => {
      return {
        padding: 0,
        height: theme.spacing(10.5),
        '&:focus': {
          outline: 'none',
        },
        '&:focus-within': {
          outline: 'none',
        },
        '&:focus-visible': {
          boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          zIndex: 1,
        },
      }
    },
    columnHeadersInner: {
      height: '100%',
    },
    columnHeaderDraggableContainer: () => {
      return {
        height: '100%',
      }
    },
    columnHeaderTitleContainer: ({ theme }) => ({
      height: '100%',
      [`& > .${dataGridClasses.columnHeaderTitleContainerContent}`]: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        [`& .${typographyClasses.root}`]: {
          ...theme.typography.tableHeader,
        },
      },
    }),
    columnHeaderCheckbox: {
      padding: 0,
    },
    cell: ({ theme }) => {
      return {
        borderBottom: 'none',
        padding: theme.spacing(0, 2),
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          zIndex: 1,
        },
        '&:focus-within': {
          outline: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      }
    },
    'cell--editing': ({ theme }) => ({
      boxShadow: 'none',
      '&:focus-within': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        zIndex: 1,
      },
    }),
    footerContainer: ({ theme }) => {
      return {
        backgroundColor: theme.palette.default.lowEmphasis.main,
        borderTop: `1px solid ${theme.palette.divider}`,
      }
    },
    columnSeparator: () => {
      return {
        visibility: 'visible',
      }
    },
    iconSeparator: ({ theme }) => {
      return {
        [`& .${dividerClasses.root}`]: {
          height: theme.spacing(7.5),
        },
      }
    },
    checkboxInput: {
      ['&:hover']: {
        backgroundColor: 'transparent',
      },
      [`&.${checkboxClasses.checked}:hover`]: {
        backgroundColor: 'transparent',
      },
    },
    toolbarContainer: ({ theme }) => {
      return {
        padding: theme.spacing(4, 8),
        backgroundColor: theme.palette.default.lowEmphasis.light,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },
    editInputCell: {
      ['&.Mui-focused']: {
        boxShadow: 'none',
      },
    },
  },
}
