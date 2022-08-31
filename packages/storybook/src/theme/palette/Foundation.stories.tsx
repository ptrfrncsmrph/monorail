import React from 'react'
import { capitalize, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorMap } from './palette.components'
import type { ColorCardProps, ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Foundation',
  parameters: {
    layout: 'fullscreen',
  },
}

export const Foundation = () => {
  const theme = useTheme()
  const colorMode = capitalize(theme.palette.mode)

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const commonColors: Array<ColorCardProps> = [
    {
      token: 'palette.common.white',
      description:
        'Elements that should remain white no matter what theme is used. Example: White text on a blue button.',
      colorValue: theme.palette.common.white,
      figmaStyle: 'Common/White',
    },
    {
      token: 'palette.common.black',
      description:
        'Elements that should remain black no matter what theme is used. Example: Black text on a yellow button.',
      colorValue: theme.palette.common.black,
      figmaStyle: 'Common/Black',
    },
  ]

  const textColors = [
    {
      token: 'palette.text.primary',
      description: 'Use for most texts. Headings, paragraphs, labels.',
      colorValue: theme.palette.text.primary,
      figmaStyle: 'Text/Primary',
    },
    {
      token: 'palette.text.secondary',
      description: '',
      colorValue: theme.palette.text.secondary,
      figmaStyle: 'Text/Secondary',
    },
    {
      token: 'palette.text.disabled',
      description: '',
      colorValue: theme.palette.text.disabled,
      figmaStyle: 'Text/Disabled',
    },
  ]

  const backgroundColors = [
    {
      token: 'palette.background.default',
      colorValue: theme.palette.background.default,
      figmaStyle: 'Background/Default',
    },
    {
      token: 'palette.background.paper',
      colorValue: theme.palette.background.paper,
      description:
        'Commonly used on surfaces. As a rule of thumb, if the background should turn from light to dark when switching from light to dark mode, use background.paper.',
      figmaStyle: 'Background/Default',
    },
  ]

  return (
    <Box gap={4} sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Common
      </Typography>
      <ColorMap
        colorMetadata={commonColors}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Text
      </Typography>
      <ColorMap
        colorMetadata={textColors}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Background
      </Typography>
      <ColorMap
        colorMetadata={backgroundColors}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
