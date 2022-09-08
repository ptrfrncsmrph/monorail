// eslint-disable-next-line no-restricted-imports
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'

import { baseTheme } from '@monorail/themes/classic/theme/baseTheme'
import { getThemeComponents } from '@monorail/themes/classic/theme/themeComponents'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum RawColor {
  Transparent = 'transparent',
  White = '#FFFFFF',
  Black = '#000000',

  Grey050 = '#F1F1F2',
  Grey100 = '#D7D8DB',
  Grey200 = '#BFBFC7',
  Grey300 = '#A7A7A7',
  Grey400 = '#8F8F9D',
  Grey500 = '#787888',
  Grey600 = '#626273',
  Grey700 = '#4D4C5C',
  Grey800 = '#3A3943',
  Grey900 = '#2E2E2E',

  Blue050 = '#EDF1F9',
  Blue100 = '#CCD9EE',
  Blue200 = '#AAC1E6',
  Blue300 = '#83AADF',
  Blue400 = '#5B93D3',
  Blue500 = '#457CB8',
  Blue600 = '#32669B',
  Blue700 = '#22507E',
  Blue800 = '#153C60',
  Blue900 = '#0B2843',

  Orange050 = '#FFEBE3',
  Orange100 = '#FFD0BC',
  Orange200 = '#FCAD8A',
  Orange300 = '#F69165',
  Orange400 = '#EB7645',
  Orange500 = '#D06442',
  Orange600 = '#D06442',
  Orange700 = '#A13E32',
  Orange800 = '#8A2B28',
  Orange900 = '#6E1E23',

  Yellow050 = '#FFFBF7',
  Yellow100 = '#FDE3C1',
  Yellow200 = '#FCCB77',
  Yellow300 = '#F0B531',
  Yellow400 = '#D9A122',
  Yellow500 = '#D9A122',
  Yellow600 = '#AC7B0E',
  Yellow700 = '#95690A',
  Yellow800 = '#7F5807',
  Yellow900 = '#694705',

  Green050 = '#E1F7E1',
  Green100 = '#A7E8AA',
  Green200 = '#8DCF92',
  Green300 = '#74B67C',
  Green400 = '#5C9E67',
  Green500 = '#468754',
  Green600 = '#346F43',
  Green700 = '#235833',
  Green800 = '#184226',
  Green900 = '#0E2C19',

  Red050 = '#FEEEED',
  Red100 = '#FBCDCC',
  Red200 = '#F8ACAA',
  Red300 = '#F58884',
  Red400 = '#F1605A',
  Red500 = '#E7383B',
  Red600 = '#B92E33',
  Red700 = '#93232A',
  Red800 = '#74111B',
  Red900 = '#4D0F16',

  Purple050 = '#F0F0FD',
  Purple100 = '#D6D5F9',
  Purple200 = '#D6D5F9',
  Purple300 = '#A79EEF',
  Purple400 = '#9282E7',
  Purple500 = '#7F66DC',
  Purple600 = '#7F66DC',
  Purple700 = '#5936A8',
  Purple800 = '#44277D',
  Purple900 = '#1D1275',

  Magenta050 = '#FCE0F9',
  Magenta100 = '#F7C2F3',
  Magenta200 = '#F09EEB',
  Magenta300 = '#E978E4',
  Magenta400 = '#DA53D7',
  Magenta500 = '#DA53D7',
  Magenta600 = '#A026A1',
  Magenta700 = '#811783',
  Magenta800 = '#620C65',
  Magenta900 = '#430546',

  Teal050 = '#C0F6EE',
  Teal100 = '#93E1D5',
  Teal200 = '#7EC7BC',
  Teal300 = '#66AFA5',
  Teal400 = '#4F988C',
  Teal500 = '#398176',
  Teal600 = '#286960',
  Teal700 = '#1B534A',
  Teal800 = '#103E36',
  Teal900 = '#072924',

  Chartreuse050 = '#CEF7B3',
  Chartreuse100 = '#AFE189',
  Chartreuse200 = '#9AC775',
  Chartreuse300 = '#86AF5E',
  Chartreuse400 = '#719748',
  Chartreuse500 = '#5E7F32',
  Chartreuse600 = '#4C6822',
  Chartreuse700 = '#3B5217',
  Chartreuse800 = '#2B3C0D',
  Chartreuse900 = '#1B2806',
}
// #endregion Raw Colors (Option Tokens)

export const DefaultLightChartColors = {
  magenta: {
    50: RawColor.Magenta050,
    100: RawColor.Magenta100,
    200: RawColor.Magenta200,
    300: RawColor.Magenta300,
    400: RawColor.Magenta400,
    500: RawColor.Magenta500,
    600: RawColor.Magenta600,
    700: RawColor.Magenta700,
    800: RawColor.Magenta800,
    900: RawColor.Magenta900,
  },
  teal: {
    50: RawColor.Teal050,
    100: RawColor.Teal100,
    200: RawColor.Teal200,
    300: RawColor.Teal300,
    400: RawColor.Teal400,
    500: RawColor.Teal500,
    600: RawColor.Teal600,
    700: RawColor.Teal700,
    800: RawColor.Teal800,
    900: RawColor.Teal900,
  },
  chartreuse: {
    50: RawColor.Chartreuse050,
    100: RawColor.Chartreuse100,
    200: RawColor.Chartreuse200,
    300: RawColor.Chartreuse300,
    400: RawColor.Chartreuse400,
    500: RawColor.Chartreuse500,
    600: RawColor.Chartreuse600,
    700: RawColor.Chartreuse700,
    800: RawColor.Chartreuse800,
    900: RawColor.Chartreuse900,
  },
}

// https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=23496%3A27
/**
 * MUI Palette with additional Monorail colors.
 * Raw colors available globally (use sparingly).
 * Mainly used to assign to component tokens in themeOverrides files.
 */
const palette: PaletteOptions = {
  // sentiment > emphasis > state/usage
  common: {
    white: RawColor.White,
    black: RawColor.Black,
  },
  primary: {
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue700,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue050,
      main: RawColor.Blue100,
      dark: RawColor.Blue300,
      contrastText: RawColor.Blue600,
      hover: RawColor.Blue100,
      active: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue400,
      main: RawColor.Blue600,
      dark: RawColor.Blue800,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Blue050,
      100: RawColor.Blue100,
      200: RawColor.Blue200,
      300: RawColor.Blue300,
      400: RawColor.Blue400,
      500: RawColor.Blue500,
      600: RawColor.Blue600,
      700: RawColor.Blue700,
      800: RawColor.Blue800,
    },
  },
  secondary: {
    light: RawColor.Orange100,
    main: RawColor.Orange200,
    dark: RawColor.Orange300,
    hover: RawColor.Orange300,
    active: RawColor.Orange400,

    lowEmphasis: {
      light: RawColor.Orange050,
      main: RawColor.Orange100,
      dark: RawColor.Orange300,
      contrastText: RawColor.Orange600,
      hover: RawColor.Orange100,
      active: RawColor.Orange300,
    },

    border: {
      light: RawColor.Orange400,
      main: RawColor.Orange600,
      dark: RawColor.Orange800,
    },

    focusRing: {
      inner: RawColor.Orange800,
      outer: RawColor.Orange400,
    },

    shades: {
      50: RawColor.Orange050,
      100: RawColor.Orange100,
      200: RawColor.Orange200,
      300: RawColor.Orange300,
      400: RawColor.Orange400,
      500: RawColor.Orange500,
      600: RawColor.Orange600,
      700: RawColor.Orange700,
      800: RawColor.Orange800,
    },
  },
  default: {
    light: RawColor.Grey300,
    main: RawColor.Grey600,
    dark: RawColor.Grey800,
    contrastText: RawColor.White,
    hover: RawColor.Grey700,
    active: RawColor.Grey800,

    lowEmphasis: {
      light: RawColor.Grey050,
      main: RawColor.Grey100,
      dark: RawColor.Grey300,
      contrastText: RawColor.Grey600,
      hover: RawColor.Grey100,
      active: RawColor.Grey300,
      selected: RawColor.Grey200,
      selectedHovered: RawColor.Grey400,
    },

    border: {
      light: RawColor.Grey400,
      main: RawColor.Grey600,
      dark: RawColor.Grey500,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Grey050,
      100: RawColor.Grey100,
      200: RawColor.Grey200,
      300: RawColor.Grey300,
      400: RawColor.Grey400,
      500: RawColor.Grey500,
      600: RawColor.Grey600,
      700: RawColor.Grey700,
      800: RawColor.Grey800,
    },
  },
  accent: {
    light: '#0C3D99',
    main: '#0C3D99',
    dark: '#161C4F',
    contrastText: baseTheme.palette.getContrastText('#0C3D99'),

    border: {
      main: '#0C3D99',
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },
  },
  success: {
    light: RawColor.Green300,
    main: RawColor.Green500,
    dark: RawColor.Green700,
    hover: RawColor.Green700,
    active: RawColor.Green800,

    lowEmphasis: {
      light: RawColor.Green050,
      main: RawColor.Green100,
      dark: RawColor.Green300,
      contrastText: RawColor.Green600,
      hover: RawColor.Green100,
      active: RawColor.Green300,
    },

    border: {
      light: RawColor.Green400,
      main: RawColor.Green500,
      dark: RawColor.Green800,
    },

    focusRing: {
      inner: RawColor.Green800,
      outer: RawColor.Green400,
    },

    shades: {
      50: RawColor.Green050,
      100: RawColor.Green100,
      200: RawColor.Green200,
      300: RawColor.Green300,
      400: RawColor.Green400,
      500: RawColor.Green500,
      600: RawColor.Green600,
      700: RawColor.Green700,
      800: RawColor.Green800,
    },
  },
  error: {
    light: RawColor.Red400,
    main: RawColor.Red500,
    dark: RawColor.Red700,
    hover: RawColor.Red700,
    active: RawColor.Red800,

    lowEmphasis: {
      light: RawColor.Red050,
      main: RawColor.Red100,
      dark: RawColor.Red300,
      contrastText: RawColor.Red600,
      hover: RawColor.Red100,
      active: RawColor.Red300,
    },

    border: {
      light: RawColor.Red400,
      main: RawColor.Red500,
      dark: RawColor.Red800,
    },

    focusRing: {
      inner: RawColor.Red800,
      outer: RawColor.Red400,
    },

    shades: {
      50: RawColor.Red050,
      100: RawColor.Red100,
      200: RawColor.Red200,
      300: RawColor.Red300,
      400: RawColor.Red400,
      500: RawColor.Red500,
      600: RawColor.Red600,
      700: RawColor.Red700,
      800: RawColor.Red800,
    },
  },
  warning: {
    light: RawColor.Orange100,
    main: RawColor.Orange200,
    dark: RawColor.Orange300,
    hover: RawColor.Orange300,
    active: RawColor.Orange400,

    lowEmphasis: {
      light: RawColor.Orange050,
      main: RawColor.Orange100,
      dark: RawColor.Orange300,
      contrastText: RawColor.Orange600,
      hover: RawColor.Orange100,
      active: RawColor.Orange300,
    },

    border: {
      light: RawColor.Orange400,
      main: RawColor.Orange500,
      dark: RawColor.Orange800,
    },

    focusRing: {
      inner: RawColor.Orange800,
      outer: RawColor.Orange400,
    },

    shades: {
      50: RawColor.Orange050,
      100: RawColor.Orange100,
      200: RawColor.Orange200,
      300: RawColor.Orange300,
      400: RawColor.Orange400,
      500: RawColor.Orange500,
      600: RawColor.Orange600,
      700: RawColor.Orange700,
      800: RawColor.Orange800,
    },
  },
  info: {
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue700,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue050,
      main: RawColor.Blue100,
      dark: RawColor.Blue300,
      contrastText: RawColor.Blue600,
      hover: RawColor.Blue100,
      active: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue400,
      main: RawColor.Blue500,
      dark: RawColor.Blue800,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Blue050,
      100: RawColor.Blue100,
      200: RawColor.Blue200,
      300: RawColor.Blue300,
      400: RawColor.Blue400,
      500: RawColor.Blue500,
      600: RawColor.Blue600,
      700: RawColor.Blue700,
      800: RawColor.Blue800,
    },
  },
  text: {
    primary: RawColor.Grey900,
    secondary: RawColor.Grey700,
    disabled: RawColor.Grey400,
  },
  grey: {
    50: RawColor.Grey050,
    100: RawColor.Grey100,
    200: RawColor.Grey200,
    300: RawColor.Grey300,
    400: RawColor.Grey400,
    500: RawColor.Grey500,
    600: RawColor.Grey600,
    700: RawColor.Grey700,
    800: RawColor.Grey800,
    900: RawColor.Grey900,
  },
  divider: RawColor.Grey200,
  rating: RawColor.Yellow400,
  background: {
    default: '#FAFAFA',
    paper: RawColor.White,
  },
  action: {
    activatedOpacity: 0.23,
    disabled: RawColor.Grey300,
    // Exposing available action color tokens and their default values - GS 3/25/22
    // active: RawColor.Blue200,
    // active: 'rgba(0, 0, 0, 0.54)',
    // disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.4, // default = 0.38
    // focus: 'rgba(0,0,0, 0.12)',
    // focusOpacity: 0.12,
    hover: RawColor.Blue050,
    // hover: 'rgba(0,0,0,0.4)',
    // hoverOpacity: 0.04,
    selected: RawColor.Blue100,
    // selected: 'rgba(0,0,0,0.8)',
    // selectedOpacity: 0.08,
  },

  chart: DefaultLightChartColors,
}

// Construct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.
const themeWithoutComponents: Theme = createTheme({
  ...baseTheme,
  palette: palette,
})

// Now create the `components` overrides using the theme we just created
const components: ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

/** The UNOFFICIAL rebranded Portal light theme which combines:
 * - `baseTheme`
 * - Extended color tokens
 * - `themeComponents` component overrides
 */
export const rebrandLightTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'rebrandLight',
    components: components,
  },
  {},
)
