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
  background: 'blue-light',
  text: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  background: 'blue-medium',
  text: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  background: 'blue-dark',
  text: 'Button',
};

export const White = Template.bind({});
White.args = {
  background: 'btn-white',
  text: 'Button',
};

export const Other = Template.bind({});
Other.args = {
  ...Other.args,
  // children
};
