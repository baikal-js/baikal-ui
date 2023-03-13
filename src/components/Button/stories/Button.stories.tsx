import React from 'react'
import type { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../Button'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    variant: 'default',
    disabled: false,
    onClick: () => console.log('onClick'),
  },
} as Meta<ButtonProps>

export const AccordionStoryTemplate: Story<ButtonProps> = ({ ...args }) => <Button {...args}>Button</Button>

AccordionStoryTemplate.storyName = 'Button '
