import type { DateFilterLocaleText } from '../filters/DateFilter.js'
import type { EnumFilterLocaleText } from '../filters/EnumFilter.js'
import type { NumericFilterLocaleText } from '../filters/NumericFilter.js'
import type { TextFilterLocaleText } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid/models/api/gridLocaleTextApi' {
  interface GridLocaleText {
    TextFilter: TextFilterLocaleText
    EnumFilter: EnumFilterLocaleText
    NumericFilter: NumericFilterLocaleText
    DateFilter: DateFilterLocaleText
  }
}
