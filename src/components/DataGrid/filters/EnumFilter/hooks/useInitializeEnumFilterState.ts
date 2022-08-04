import React from 'react'

import { gridColumnLookupSelector, useGridApiContext } from '../../../internal'
import { enumFilterOperator } from '../constants'
import { getEnumFilterInitialState } from '../models'

export function useInitializeEnumFilterState(
  field: string,
  external?: boolean,
): void {
  const apiRef = useGridApiContext()

  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!column.filterOperators?.includes(enumFilterOperator)) {
        column.filterOperators! = [enumFilterOperator]
      }
    }
    if (!apiRef.current.state.enumFilter.has(field)) {
      apiRef.current.state.enumFilter.set(field, getEnumFilterInitialState())
    }
  }, [apiRef, field, external])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
