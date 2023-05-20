import React from 'react'
import { BorderZone as BorderZoneComponent } from '../index'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../../Typography'

export default {
  title: 'components/BorderZone',
  component: BorderZoneComponent,
} as Meta<typeof BorderZoneComponent>

type Story = StoryObj<typeof BorderZoneComponent>

export const BorderZone: Story = {
  render: () => (
    <div
      style={{
        width: 'min-content',
      }}
    >
      <BorderZoneComponent>
        <Typography>content</Typography>
      </BorderZoneComponent>
    </div>
  ),
}
