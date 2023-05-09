import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs as TabsComponent } from '../../index'

export default {
  title: 'components/Tabs',
  component: TabsComponent,
} as Meta<typeof TabsComponent>

type Story = StoryObj<typeof TabsComponent>

export const Tabs: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <TabsComponent
        tabs={[
          {
            text: 'Profile',
            renderContent: () => <div>Profile Tab</div>,
          },
          {
            text: 'Settings',
            renderContent: () => <div>Settings Tab</div>,
          },
          {
            text: 'Info',
            renderContent: () => <div>Info Tab</div>,
          },
          {
            text: 'About',
            renderContent: () => <div>About Tab</div>,
          },
          {
            text: 'Contact',
            renderContent: () => <div>Contact Tab</div>,
          },
        ]}
      />
    </div>
  ),
}
