import React from 'react'
import { Button as ButtonComponent } from '../index'
import type { Meta, StoryObj } from '@storybook/react'
import { RightArrow } from '../../Icons'

export default {
  title: 'components/buttons/Buttons',
  component: ButtonComponent,
} as Meta<typeof ButtonComponent>

type Story = StoryObj<typeof ButtonComponent>

export const Buttons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ButtonComponent>Button</ButtonComponent>
        <ButtonComponent icon={<RightArrow />}>Button With Icon</ButtonComponent>
        <ButtonComponent disabled>Button Disabled</ButtonComponent>
        <ButtonComponent icon={<RightArrow />} disabled>
          Button With Icon
        </ButtonComponent>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ButtonComponent variant='filled'>Button</ButtonComponent>
        <ButtonComponent variant='filled' icon={<RightArrow />}>
          Button With Icon
        </ButtonComponent>
        <ButtonComponent variant='filled' disabled>
          Button Disabled
        </ButtonComponent>
        <ButtonComponent variant='filled' icon={<RightArrow />} disabled>
          Button With Icon
        </ButtonComponent>
      </div>
    </div>
  ),
}
