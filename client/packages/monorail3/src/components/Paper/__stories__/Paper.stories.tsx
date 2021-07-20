// Edit this file to add new stories
import React from 'react'
import { Paper, PaperProps } from '../Paper'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Paper.stories.gen'
import { Box } from '../../Box/Box'
import { createTheme, styled, ThemeProvider } from '@material-ui/core/styles'
import { Grid } from '../../Grid/Grid'

/**
 * Metadata for Paper stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PaperProps>(args => <Paper {...args} />, { args: {} })
/** Default story for Paper (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicPaper = story<PaperProps>(() => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <Paper elevation={0} />
    <Paper />
    <Paper elevation={3} />
  </Box>
))

export const Variants = story<PaperProps>(
  () => (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `If you need an outlined surface, use the variant prop.`,
        },
      },
    },
  },
)

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })

export const Elevation = story<PaperProps>(
  () => (
    <Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(elevation => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The elevation can be used to establish a hierachy between other content. In practical terms, the elevation controls the size of the shadow applied to the surface. In dark mode, raising the elevation also makes the surface lighter.`,
        },
      },
    },
  },
)
