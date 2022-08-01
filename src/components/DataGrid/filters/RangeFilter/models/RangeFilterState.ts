import { isPlainObject } from '@mui/utils'

import { RangeFilterOperator } from './RangeFilterOperator'

export const RangeFilterStateTypeId = Symbol.for(
  '@simspace/monorail3/RangeFilterState',
)

export type RangeFilterStateTypeId = typeof RangeFilterStateTypeId

export interface RangeFilterState<K = string, A = unknown> {
  [RangeFilterStateTypeId]: RangeFilterStateTypeId
  operator: RangeFilterOperator<K, A>
  first: A | null
  second: A | null
}

export function isRangeFilterState(value: unknown): value is RangeFilterState {
  return isPlainObject(value) && RangeFilterStateTypeId in value
}
