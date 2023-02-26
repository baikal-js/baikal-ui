import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "../index"

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  variant: 'primary',
  children: 'Button primary'
};

export const SuccessBtn = Template.bind({});
SuccessBtn.args = {
  variant: 'success',
  children: 'Button success'
};
