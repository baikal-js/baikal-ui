import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox as CheckboxComponent } from '../../index'

export default {
  title: 'components/Checkbox',
  component: CheckboxComponent,
} as Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>

export const Checkbox: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <CheckboxComponent />
      <CheckboxComponent checked />
      <CheckboxComponent disabled />
      <CheckboxComponent checked disabled />
    </div>
  ),
}
