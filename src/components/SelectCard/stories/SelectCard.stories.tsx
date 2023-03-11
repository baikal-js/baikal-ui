import React from 'react'
import type { Meta, Story } from '@storybook/react'
import { SelectCard, SelectCardProps } from '../src/SelectCard'

export default {
  title: 'components/SelectCard',
  component: SelectCard,
  args: {
    cards: ['place', 'lake', 'april', 'duration'],
    successCard: 'lake',
  },
} as Meta<SelectCardProps>

export const AccordionStoryTemplate: Story<SelectCardProps> = ({ ...args }) => <SelectCard {...args} />

AccordionStoryTemplate.storyName = 'Select Card'
