import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch as SwitchComponent } from 'components'

export default {
  title: 'components/Switch',
  component: SwitchComponent,
} as Meta<typeof SwitchComponent>

type Story = StoryObj<typeof SwitchComponent>

export const Switch: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <SwitchComponent />
    </div>
  ),
}
