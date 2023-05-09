import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox as CheckboxComponent } from '../../index'

export default {
  title: 'components/inputs/Checkbox',
  component: CheckboxComponent,
} as Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>

export const Checkbox: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
      }}
    >
      <CheckboxComponent checked />
      <CheckboxComponent />
    </div>
  ),
}
