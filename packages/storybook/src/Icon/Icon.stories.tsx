// Edit this file to add new stories
import React from 'react'
import { Box, Icon, IconProps, Typography } from '@monorail/components'
import * as Icons from '@monorail/components/icons'
import { Illustration } from '@monorail/components/icons/Illustration'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { styled } from '@mui/material'

import { story } from '../helpers/storybook'
/**
 * Metadata for Icon stories - update/extend as needed
 */
export default { title: 'Data Display/Icon', component: Icon }

const IconsContainer = styled('div')`
  svg {
    font-size: 48px;
  }
`

const IconContainer = ({
  icon,
  label,
}: {
  icon: JSX.Element
  label: string
}) => (
  <Box
    gridColumn="span 3"
    display="grid"
    minHeight={80}
    sx={{ placeItems: 'center' }}
  >
    {icon}
    <Typography align="center" mt={2}>
      {label}
    </Typography>
  </Box>
)

const Template = story<IconProps>((args: IconProps) => <Icon {...args} />, {
  args: {},
  muiName: 'MuiIcon',
})

export const Default = story(Template)

export const MaterialIcons = story<IconProps>(
  () => (
    <IconsContainer>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
        <IconContainer label="Home" icon={<HomeIcon color="default" />} />
        <IconContainer
          label="Home Outlined"
          icon={<HomeOutlinedIcon color="default" />}
        />
        <IconContainer label="Delete" icon={<DeleteIcon color="default" />} />
        <IconContainer
          label="Delete Outlined"
          icon={<DeleteOutlineOutlinedIcon color="default" />}
        />
        <IconContainer
          label="Account Circle"
          icon={<AccountCircleIcon color="default" />}
        />
        <IconContainer
          label="Account Circle Outlined"
          icon={<AccountCircleOutlinedIcon color="default" />}
        />
        <IconContainer
          label="Arrow Drop Down Circle"
          icon={<ArrowDropDownCircleIcon color="default" />}
        />
        <IconContainer
          label="Arrow Drop Down Circle Outlined"
          icon={<ArrowDropDownCircleOutlinedIcon color="default" />}
        />
      </Box>
    </IconsContainer>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Search over 1,900+ Material icons: https://mui.com/components/material-icons/`,
        },
      },
    },
  },
)

const colors = [
  'default',
  'inherit',
  'disabled',
  'action',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
] as const

export const Colors = story<IconProps>(() => (
  <IconsContainer>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
      {colors.map(color => (
        <IconContainer
          key={`icon-${color}`}
          label={color}
          icon={<HomeIcon color={color} />}
        />
      ))}
    </Box>
  </IconsContainer>
))

const sizes = ['small', 'medium', 'large', 'inherit'] as const

export const Sizes = story<IconProps>(() => (
  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
    {sizes.map(size => (
      <IconContainer
        key={`icon-${size}`}
        label={size}
        icon={<HomeIcon fontSize={size} />}
      />
    ))}
  </Box>
))

export const AllCustomIcons = story<IconProps>(args => (
  <IconsContainer>
    <Box mt={4}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
        {Object.keys(Icons)
          .sort()
          .map((icon, index) => (
            <Box
              key={index}
              gridColumn="span 3"
              display="grid"
              height={80}
              sx={{ placeItems: 'center' }}
            >
              {
                // eslint-disable-next-line
                React.createElement((Icons as any)[icon], { ...args })
              }
              <Typography noWrap>{icon}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  </IconsContainer>
))

export const AppIcons = story<IconProps>(() => (
  <IconsContainer>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
      <IconContainer label="Admin" icon={<Icons.Admin />} />
      <IconContainer label="Catalog" icon={<Icons.Catalog />} />
      <IconContainer label="Events" icon={<Icons.Events />} />
      <IconContainer label="Home" icon={<Icons.Home />} />
      <IconContainer label="My Org" icon={<Icons.MyOrg />} />
      <IconContainer label="Product Scoring" icon={<Icons.ProductScoring />} />
      <IconContainer
        label="Reports Analytics"
        icon={<Icons.ReportsAnalytics />}
      />
      <IconContainer label="Risk" icon={<Icons.Risk />} />
      <IconContainer label="Tech Ops" icon={<Icons.TechOps />} />
      <IconContainer label="Training" icon={<Icons.Training />} />
    </Box>
  </IconsContainer>
))

const ILLUSTRATION_SIZE = 136

export const Illustrations = story<IconProps>(() => (
  <Box mt={4}>
    <Typography variant="h2" mb={4}>
      Spot Illustrations
    </Typography>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
      <IconContainer
        label="Bare Tree"
        icon={
          <Illustration
            Svg={Icons.BareTree}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Broken Heart"
        icon={
          <Illustration
            Svg={Icons.BrokenHeart}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Calendar"
        icon={
          <Illustration
            Svg={Icons.Calendar}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Chickenlets"
        icon={
          <Illustration
            Svg={Icons.Chickenlets}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="DNS Outline"
        icon={
          <Illustration
            Svg={Icons.DnsOutline}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Empty Upload"
        icon={
          <Illustration
            Svg={Icons.EmptyUpload}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Event Complete"
        icon={
          <Illustration
            Svg={Icons.EventComplete}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Event Paused"
        icon={
          <Illustration
            Svg={Icons.EventPaused}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Ghost Empty"
        icon={
          <Illustration
            Svg={Icons.GhostEmpty}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Ghost Link"
        icon={
          <Illustration
            Svg={Icons.GhostLink}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Ghost Shrug"
        icon={
          <Illustration
            Svg={Icons.GhostShrug}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Happy Sun"
        icon={
          <Illustration
            Svg={Icons.HappySun}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="No Results"
        icon={
          <Illustration
            Svg={Icons.NoResults}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Shrug"
        icon={
          <Illustration
            Svg={Icons.Shrug}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Telescope"
        icon={
          <Illustration
            Svg={Icons.Telescope}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Target Archery"
        icon={
          <Illustration
            Svg={Icons.TargetArchery}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Target Empty"
        icon={
          <Illustration
            Svg={Icons.TargetEmpty}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
    </Box>
    <Typography variant="h2" mt={10} mb={4}>
      Other Illustrations
    </Typography>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={8}>
      <IconContainer
        label="Browse Content Catalog"
        icon={
          <Illustration
            Svg={Icons.BrowseContentCatalog}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Content Catalog Training"
        icon={
          <Illustration
            Svg={Icons.ContentCatalogTraining}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Pac Man"
        icon={
          <Illustration
            Svg={Icons.PacMan}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Readiness Rollup"
        icon={
          <Illustration
            Svg={Icons.ReadinessRollup}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Spider Chart"
        icon={
          <Illustration
            Svg={Icons.SpiderChart}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
      <IconContainer
        label="Welcome"
        icon={
          <Illustration
            Svg={Icons.Welcome}
            $width={ILLUSTRATION_SIZE}
            $height={ILLUSTRATION_SIZE}
          />
        }
      />
    </Box>
  </Box>
))