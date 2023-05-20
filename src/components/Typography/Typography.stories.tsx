import React from 'react'
import type { Meta, Story } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export default {
  title: 'components/Typography',
  component: Typography,
  args: {
    variant: 'h4',
    sx: { margin: '0 20px' },
  },
} as Meta<TypographyProps>

export const AccordionStoryTemplate: Story<TypographyProps> = ({ ...args }) => (
  <Typography {...args}>Заголовок</Typography>
)

AccordionStoryTemplate.storyName = 'Typography'
