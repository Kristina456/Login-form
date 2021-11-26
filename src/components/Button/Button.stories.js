import React from 'react';
import Button from './Button';

export default {
  title: 'Project/Button',
  component: Button,
  children: 'Button',
  argTypes: {
    variant: {
      options: ['light', 'medium', 'dark', 'white'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  children: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Button',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  children: 'Button',
};

export const Other = Template.bind({});
Other.args = {
  ...Other.args,
  // children
};
