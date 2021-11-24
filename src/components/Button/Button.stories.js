import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  text: 'Button',
  argTypes: {
    variant: {
      options: ['light', 'medium', 'dark', 'white'],
      control: { type: 'select' },
    },
    padding: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  text: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  text: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  text: 'Button',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  text: 'Button',
};

export const Other = Template.bind({});
Other.args = {
  ...Other.args,
  // children
};
