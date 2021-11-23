import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  text: 'Button',
  argTypes: {
    backgroundColor: { control: 'background' },
  },
};

const Template = (args) => <Button {...args} />;

export const Light = Template.bind({});
Light.args = {
  background: 'light',
  text: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  background: 'medium',
  text: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  background: 'dark',
  text: 'Button',
};

export const White = Template.bind({});
White.args = {
  background: 'white',
  text: 'Button',
};

export const Other = Template.bind({});
Other.args = {
  ...Other.args,
  // children
};
