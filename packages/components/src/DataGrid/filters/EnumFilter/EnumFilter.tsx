/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Search } from '@mui/icons-material'
import type {
  ListItemProps,
  SxProps,
  TextFieldProps,
  Theme,
} from '@mui/material'
import { useThemeProps } from '@mui/material'

import {
  combineSxProps,
  composeClasses,
  filterMap,
  styled,
  useForceUpdate,
} from '@monorail/utils'

import { Checkbox } from '../../../Checkbox.js'
import { InputAdornment } from '../../../InputAdornment.js'
import { List } from '../../../List.js'
import { ListItem } from '../../../ListItem.js'
import {
  ListItemButton,
  listItemButtonClasses,
} from '../../../ListItemButton.js'
import { ListItemIcon } from '../../../ListItemIcon.js'
import { ListItemText } from '../../../ListItemText.js'
import { ScrollShadow } from '../../../ScrollShadow.js'
import { TextField } from '../../../TextField.js'
import { useGridApiContext } from '../../internal.js'
import { ClearFilterButton } from '../components/ClearFilterButton.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { getEnumFilterUtilityClass } from './constants/enumFilterClasses.js'
import { useInitializeEnumFilterState } from './hooks.js'
import type { EnumFilterProps } from './models/EnumFilterProps.js'

const EnumFilterRoot = styled('div', {
  name: 'MonorailEnumFilter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles,
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: theme.spacing(120),
}))

export function EnumFilter(inProps: EnumFilterProps) {
  const props = useThemeProps({
    name: 'MonorailEnumFilter',
    props: inProps,
  })

  const {
    field,
    renderValue,
    values,
    external,
    compare,
    slotProps = {},
  } = props

  const classes = useUtilityClasses(props)

  const apiRef = useGridApiContext()
  useInitializeEnumFilterState({ field, compare, external })

  const state = apiRef.current.state.enumFilter.get(field)!
  const selectedSize = state.uiSelected.size
  const searchText = state.searchText
  const isFiltered = selectedSize > 0

  const forceUpdate = useForceUpdate()

  const beforeSyncFilter = () => {
    state.selected = new Set(state.uiSelected)
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    'enum',
    field,
    state,
    state => state.selected.size > 0,
    beforeSyncFilter,
  )

  const handleMinWidthCallback = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (element) {
        const width = element.clientWidth
        if (state.width < width) {
          state.width = width
        }
      }
    },
    [state],
  )

  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      state.searchText = event.currentTarget.value
      forceUpdate()
    },
    [state, forceUpdate],
  )

  const handleFilterItemClick = React.useCallback(
    (value: unknown) => (_event: React.MouseEvent<HTMLDivElement>) => {
      if (state.uiSelected.has(value)) {
        state.uiSelected.delete(value)
      } else {
        state.uiSelected.add(value)
      }
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleClearFilter = React.useCallback(() => {
    state.uiSelected.clear()
    forceUpdate()
    syncFilter()
  }, [state, forceUpdate, syncFilter])

  const searchProps: TextFieldProps = {
    ...slotProps.search,
    size: 'medium',
    placeholder: slotProps.search?.placeholder ?? 'Search',
    InputProps: {
      ...slotProps.search?.InputProps,
      startAdornment: slotProps.search?.InputProps?.startAdornment ?? (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
      sx: combineSxProps(
        theme => ({
          borderRadius: theme.spacing(6),
        }),
        slotProps.search?.InputProps?.sx,
      ),
    },
    value: searchText,
    onChange: handleSearchTextChange,
    sx: combineSxProps(
      theme => ({
        margin: theme.spacing(4),
      }),
      slotProps.search?.sx,
    ),
    autoFocus: true,
  }

  return (
    <EnumFilterRoot
      className={classes.root}
      ref={handleMinWidthCallback}
      style={{ minWidth: `${state.width}px` }}
    >
      <TextField {...searchProps} />
      <ScrollShadow bottom={isFiltered}>
        <List
          {...slotProps.list}
          disablePadding
          sx={combineSxProps(
            theme => ({
              maxHeight: theme.spacing(76),
              flexDirection: 'column',
            }),
            slotProps.list?.sx,
          )}
        >
          {filterMap(values, (value, index) => {
            if (String(value).includes(searchText)) {
              const label = renderValue?.(value) ?? value
              return (
                <EnumFilterItem
                  {...slotProps.listItem}
                  key={index}
                  label={label}
                  checked={state.uiSelected.has(value)}
                  onClick={handleFilterItemClick(value)}
                />
              )
            }
          })}
        </List>
      </ScrollShadow>
      <ClearFilterButton
        {...slotProps.clearFilterButton}
        sx={combineSxProps(
          theme => ({
            mb: isFiltered ? 0 : -8,
            padding: theme.spacing(4),
          }),
          slotProps.clearFilterButton?.sx,
        )}
        isFiltered={isFiltered}
        onClick={handleClearFilter}
      >
        {apiRef.current
          .getLocaleText('EnumFilter')
          .clearSelectionButton(selectedSize)}
      </ClearFilterButton>
    </EnumFilterRoot>
  )
}

export interface EnumFilterItemProps extends Omit<ListItemProps, 'onClick'> {
  label: string
  checked: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  sx?: SxProps<Theme>
}

const EnumFilterItem = React.memo(function EnumFilterItem(
  props: EnumFilterItemProps,
) {
  const { label, sx, checked, onClick, ...listItemProps } = props
  return (
    <ListItem
      {...listItemProps}
      disableGutters
      disablePadding
      dense
      sx={combineSxProps(
        {
          flex: 1,
          minWidth: 0,
          margin: 0,
          padding: 0,
          '& span': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        sx,
      )}
    >
      <ListItemButton
        sx={theme => ({
          py: theme.spacing(2),
          px: 0,
          [`&.${listItemButtonClasses.focusVisible}`]: {
            outline: 'none',
            boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
            borderRadius: 0,
          },
        })}
        onClick={onClick}
      >
        <ListItemIcon
          sx={theme => ({
            margin: theme.spacing(0, 0, 0, 4),
          })}
        >
          <Checkbox tabIndex={-1} edge="start" checked={checked} disableHover />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
})

function useUtilityClasses(props: EnumFilterProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getEnumFilterUtilityClass, classes)
}
