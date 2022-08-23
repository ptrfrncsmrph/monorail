import {
  MobileTimePicker as MuiMobileTimePicker,
  MobileTimePickerProps as MuiMobileTimePickerProps,
} from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [MobileTimePicker API](https://mui.com/x/api/date-pickers/mobile-time-picker/)
 */
export const MobileTimePicker: typeof MuiMobileTimePicker = MuiMobileTimePicker

export interface MobileTimePickerProps<TInputDate = Date, TDate = TInputDate>
  extends MuiMobileTimePickerProps<TInputDate, TDate> {}

export * from '@mui/x-date-pickers/MobileTimePicker'